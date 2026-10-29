import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meg's Pets collects and uses your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <main style={{ "maxWidth": "820px", "margin": "0 auto", "padding": "64px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "36px", "fontSize": "17px", "lineHeight": "1.65", "color": "#D4D4D8" }}>
        <p style={{ "margin": "0", "background": "#2A1220", "border": "1px solid var(--accent)", "borderRadius": "14px", "padding": "14px 18px", "fontSize": "15px", "lineHeight": "1.5", "color": "#FFC2DF" }}>
          {"Template \u2014 please review this policy (ideally with a legal adviser) and fill in every [PLACEHOLDER] before the site goes live."}
        </p>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
          <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "15px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "var(--leaf)" }}>
            {"Legal"}
          </p>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 56px)", "letterSpacing": "-1.5px", "lineHeight": "1.05", "color": "#F5F5F5" }}>
            {"Privacy Policy"}
          </h1>
          <p style={{ "margin": "0", "color": "#A1A1AA", "fontSize": "15px" }}>
            {"Last updated: [DATE]"}
          </p>
          <p style={{ "margin": "0" }}>
            {"This policy explains how Meg's Pets collects and uses your personal information, in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."}
          </p>
        </div>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"1. Who we are"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Meg's Pets is a trading name of [BUSINESS LEGAL NAME], [BUSINESS ADDRESS]. We are the data controller for the information described here. [ICO REGISTRATION NUMBER, IF APPLICABLE.] Contact us about your data at meg_richman@hotmail.co.uk."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"2. What we collect"}
          </h2>
          <ul style={{ "margin": "0", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Your details:"}
              </strong>
              {" name, phone number, email address and an emergency contact."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Home and access:"}
              </strong>
              {" your address, key and alarm details, and access instructions."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Your pet:"}
              </strong>
              {" name, breed, age, behaviour notes, vet details, vaccination records, medical conditions and medication."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Photos and updates"}
              </strong>
              {" of your pet taken during visits."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Payment records:"}
              </strong>
              {" invoices and payments. We don't store your card details."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"Enquiries"}
              </strong>
              {" you send through our booking form, email or messages."}
            </li>
          </ul>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"3. Why we use it, and our lawful basis"}
          </h2>
          <ul style={{ "margin": "0", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"To provide our services"}
              </strong>
              {" \u2014 booking, caring for your pet, accessing your home and taking payment. Lawful basis: "}
              <em>
                {"contract"}
              </em>
              {"."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"To keep your pet safe"}
              </strong>
              {" \u2014 using health and vet details, and contacting you or a vet in an emergency. Lawful basis: "}
              <em>
                {"contract"}
              </em>
              {" and "}
              <em>
                {"legitimate interests"}
              </em>
              {"."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"To keep records"}
              </strong>
              {" for accounts, tax and insurance. Lawful basis: "}
              <em>
                {"legal obligation"}
              </em>
              {"."}
            </li>
            <li>
              <strong style={{ "color": "#F5F5F5" }}>
                {"To share pet photos"}
              </strong>
              {" on our website or social media. Lawful basis: "}
              <em>
                {"consent"}
              </em>
              {", which you can withdraw at any time."}
            </li>
          </ul>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"4. How long we keep it"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"We keep client and pet records for as long as you use our services and for [X YEARS] afterwards. Financial records are kept for 6 years, as required by HMRC. Key and access details are deleted, and keys returned, when services end. Enquiries that don't lead to a booking are deleted after [X MONTHS]."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"5. Who we share it with"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"We never sell your data. We only share it when we need to:"}
          </p>
          <ul style={{ "margin": "0", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
            <li>
              {"your vet, or an emergency vet, if your pet needs care;"}
            </li>
            <li>
              {"our insurer, if there is a claim or incident;"}
            </li>
            <li>
              {"our accountant, and HMRC where required;"}
            </li>
            <li>
              {"trusted service providers who help us run the business, such as [BOOKING / EMAIL / HOSTING PROVIDERS], under data protection agreements;"}
            </li>
            <li>
              {"anyone else where the law requires it."}
            </li>
          </ul>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"6. Your rights"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"You have the right to access the personal data we hold about you, have it corrected, have it erased, restrict or object to how we use it, receive a copy to move elsewhere, and withdraw consent at any time. To use any of these rights, email meg_richman@hotmail.co.uk. We will reply within one month."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"7. Complaints"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"If you're unhappy with how we handle your data, please contact us first. You also have the right to complain to the Information Commissioner's Office (ICO) at "}
            <a href="https://ico.org.uk">
              {"ico.org.uk"}
            </a>
            {" or by calling 0303 123 1113."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"8. Cookies"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Our website uses only the cookies needed for it to work. [IF YOU ADD ANALYTICS OR OTHER NON-ESSENTIAL COOKIES, LIST THEM HERE AND ASK FOR CONSENT BEFORE SETTING THEM.]"}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"9. Contact us"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"[BUSINESS LEGAL NAME], [BUSINESS ADDRESS]"}
            <br />
            {"Email: meg_richman@hotmail.co.uk \u00b7 Phone: 07900 490887"}
          </p>
          <p style={{ "margin": "0" }}>
            {"We may update this policy from time to time; the latest version will always be on this page."}
          </p>
        </section>
      </main>
    </>
  );
}
