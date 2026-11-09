// Cloudflare Pages Function: POST /api/contact
// Emails a contact-form enquiry to Meg through SendGrid.
// The API key lives in the SENDGRID_API_KEY secret on the Pages project, never in this repo.

type Env = {
  SENDGRID_API_KEY?: string;
  // Optional WhatsApp alert via CallMeBot: Meg's number (e.g. +447900490887) and her CallMeBot key.
  CALLMEBOT_PHONE?: string;
  CALLMEBOT_APIKEY?: string;
};

// Sends a short WhatsApp alert to Meg. Never blocks or fails the enquiry.
async function whatsappAlert(env: Env, lines: string[]) {
  if (!env.CALLMEBOT_PHONE || !env.CALLMEBOT_APIKEY) return;
  const url =
    "https://api.callmebot.com/whatsapp.php?phone=" +
    encodeURIComponent(env.CALLMEBOT_PHONE) +
    "&text=" +
    encodeURIComponent(lines.join("\n").slice(0, 1000)) +
    "&apikey=" +
    encodeURIComponent(env.CALLMEBOT_APIKEY);
  try {
    const res = await fetch(url);
    if (!res.ok) console.error("CallMeBot error", res.status, await res.text());
  } catch (err) {
    console.error("CallMeBot request failed", err);
  }
}

const TO = "meg_richman@hotmail.co.uk";
const FROM = { email: "info@megspets.co.uk", name: "Meg's Pets website" };
const SERVICES: Record<string, string> = {
  group: "Group Dog Walk",
  puppy: "Puppy Visit",
  cat: "Cat Visits",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function onRequestPost({
  request,
  env,
  waitUntil,
}: {
  request: Request;
  env: Env;
  waitUntil: (p: Promise<unknown>) => void;
}) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: real people never fill this hidden field.
  if (clean(data.company, 200)) return json({ ok: true });

  const name = clean(data.name, 200);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 50);
  const pets = clean(data.pets, 300);
  const service = SERVICES[clean(data.service, 20)] ?? "Not specified";
  const times = clean(data.times, 300);
  const message = clean(data.message, 5000);

  if (!name) return json({ ok: false, error: "Please enter your name." }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !phone) {
    return json({ ok: false, error: "Please give an email address or phone number so we can reply." }, 400);
  }
  if (!env.SENDGRID_API_KEY) {
    return json({ ok: false, error: "Email isn't set up yet. Please call or WhatsApp us instead." }, 500);
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email || "Not given"],
    ["Phone", phone || "Not given"],
    ["Pet(s)", pets || "Not given"],
    ["Service", service],
    ["Preferred days and times", times || "Not given"],
  ];
  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message || "(no message)"}\n`;
  const html =
    `<h2 style="font-family:sans-serif">New enquiry from the website</h2>` +
    `<table style="font-family:sans-serif;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
      )
      .join("") +
    `</table><p style="font-family:sans-serif;font-weight:bold;margin-top:16px">Message</p>` +
    `<p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(message || "(no message)")}</p>`;

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // WhatsApp alert runs alongside the email; the response doesn't wait for it.
  const contactLine = [phone && `📞 ${phone}`, email && `✉️ ${email}`].filter(Boolean).join(" · ");
  waitUntil(
    whatsappAlert(env, [
      "🐾 *New website enquiry*",
      `${name} – ${service}`,
      ...(contactLine ? [contactLine] : []),
      ...(pets ? [`Pets: ${pets}`] : []),
      ...(times ? [`When: ${times}`] : []),
      ...(message ? [`"${message.slice(0, 600)}"`] : []),
    ]),
  );

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO, name: "Meg" }] }],
      from: FROM,
      ...(validEmail ? { reply_to: { email, name } } : {}),
      subject: `New enquiry: ${service} from ${name}`,
      content: [
        { type: "text/plain", value: text },
        { type: "text/html", value: html },
      ],
    }),
  });

  if (!res.ok) {
    console.error("SendGrid error", res.status, await res.text());
    return json({ ok: false, error: "Sorry, your message couldn't be sent. Please call or WhatsApp us instead." }, 502);
  }
  return json({ ok: true });
}
