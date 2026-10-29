"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function ContactContent() {
  const [picked, setPicked] = useState("group");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <main style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "48px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "maxWidth": "720px" }}>
          <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "15px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "var(--leaf)" }}>
            {"Contact"}
          </p>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 64px)", "letterSpacing": "-1.5px", "lineHeight": "1.04" }}>
            {"Let's say hello."}
          </h1>
          <p style={{ "margin": "0", "fontSize": "20px", "lineHeight": "1.6", "color": "#B4B4BC" }}>
            {"Whether you're looking for regular walks, a puppy visit or someone to pop in on your cat, we'd love to hear from you. Send us a message and we'll arrange a free meet & greet."}
          </p>
        </div>
        <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "32px", "alignItems": "flex-start" }}>
          <div style={{ "flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
            <div style={{ "background": "#18181B", "borderRadius": "24px", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "24px" }}>
                {"Contact details"}
              </h2>
              <a href="tel:+447900490887" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "color": "#F5F5F5", "fontWeight": "700", "fontSize": "18px", "minHeight": "44px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {"07900 490887"}
              </a>
              <a href="mailto:meg_richman@hotmail.co.uk" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "color": "#F5F5F5", "fontWeight": "700", "fontSize": "18px", "minHeight": "44px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {"meg_richman@hotmail.co.uk"}
              </a>
              <a href="https://wa.me/447900490887" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "alignSelf": "flex-start", "background": "var(--accent)", "color": "#0B0B0C", "textDecoration": "none", "fontWeight": "700", "fontSize": "17px", "padding": "14px 24px", "borderRadius": "999px", "minHeight": "48px", "boxSizing": "border-box" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B0B0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3z" />
                  <path d="M9.2 8.6c-.4 0-.8.4-.8 1 0 2.6 2.6 5.3 5.3 5.4.6 0 1-.4 1-.8v-.9l-1.6-.6-.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-.6-1.6z" />
                </svg>
                {"Message us on WhatsApp"}
              </a>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <a href="[FACEBOOK URL]" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "color": "#F5F5F5", "border": "2px solid #2A2A2E", "borderRadius": "999px", "padding": "10px 16px", "fontWeight": "500", "fontSize": "15px", "minHeight": "44px", "boxSizing": "border-box" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  {"Facebook"}
                </a>
                <a href="[INSTAGRAM URL]" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "color": "#F5F5F5", "border": "2px solid #2A2A2E", "borderRadius": "999px", "padding": "10px 16px", "fontWeight": "500", "fontSize": "15px", "minHeight": "44px", "boxSizing": "border-box" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  {"Instagram"}
                </a>
              </div>
            </div>
            <div style={{ "background": "#18181B", "borderRadius": "24px", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "24px" }}>
                {"Areas we cover"}
              </h2>
              <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "18px" }}>
                <li style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {"Crawley"}
                </li>
                <li style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {"Crawley Down"}
                </li>
                <li style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {"East Grinstead"}
                </li>
              </ul>
              <p style={{ "margin": "0", "fontSize": "15px", "color": "#A1A1AA" }}>
                {"And surrounding areas — just ask."}
              </p>
            </div>
            <p style={{ "margin": "0", "display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "16px", "color": "#D4D4D8" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {"We usually reply within [REPLY TIME, E.G. 24 HOURS]."}
            </p>
          </div>
          {sent && (
          <div style={{ "flex": "999 1 560px", "minWidth": "0", "background": "#18181B", "borderRadius": "28px", "padding": "48px", "display": "flex", "flexDirection": "column", "gap": "16px", "alignItems": "flex-start" }}>
            <span style={{ "width": "64px", "height": "64px", "borderRadius": "50%", "background": "var(--accent)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B0B0C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l5 5 9-10" />
              </svg>
            </span>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px" }}>
              {"Thanks — message sent!"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.6", "color": "#B4B4BC" }}>
              {"We'll get back to you within [REPLY TIME] to arrange your free meet & greet."}
            </p>
            <button type="button" style={{ "marginTop": "8px", "background": "transparent", "border": "2px solid #F5F5F5", "color": "#F5F5F5", "font": "inherit", "fontWeight": "700", "fontSize": "16px", "padding": "12px 24px", "borderRadius": "999px", "cursor": "pointer", "minHeight": "44px" }} onClick={() => setSent(false)}>
              {"Send another"}
            </button>
          </div>
          )}
          {!sent && (
          <form style={{ "flex": "999 1 560px", "minWidth": "0", "background": "#18181B", "borderRadius": "28px", "padding": "40px", "display": "flex", "flexDirection": "column", "gap": "24px" }} onSubmit={onSubmit}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "28px" }}>
              {"Send us a message"}
            </h2>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", "gap": "20px" }}>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
                {"Your name"}
                <input type="text" autoComplete="name" style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5" }} />
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
                {"Email"}
                <input type="email" autoComplete="email" style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5" }} />
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
                {"Phone"}
                <input type="tel" autoComplete="tel" style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5" }} />
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
                {"Pet name(s) and type"}
                <input type="text" placeholder="e.g. Bella, cockapoo" style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5" }} />
              </label>
            </div>
            <fieldset style={{ "border": "0", "margin": "0", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <legend style={{ "fontWeight": "700", "fontSize": "15px", "marginBottom": "12px", "padding": "0" }}>
                {"Service you're interested in"}
              </legend>
              <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", "gap": "12px" }}>
                <button type="button" className="svc" data-svc="group" aria-pressed={picked === "group"} onClick={() => setPicked("group")}>
                  {"Group Dog Walk"}
                </button>
                <button type="button" className="svc" data-svc="puppy" aria-pressed={picked === "puppy"} onClick={() => setPicked("puppy")}>
                  {"Puppy Visit"}
                </button>
                <button type="button" className="svc" data-svc="cat" aria-pressed={picked === "cat"} onClick={() => setPicked("cat")}>
                  {"Cat Visits"}
                </button>
              </div>
            </fieldset>
            <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
              {"Preferred days and times"}
              <input type="text" placeholder="e.g. Mon, Wed, Fri — late morning" style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5" }} />
            </label>
            <label style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontWeight": "700", "fontSize": "15px" }}>
              {"Message"}
              <textarea rows={5} style={{ "font": "inherit", "fontWeight": "400", "fontSize": "16px", "padding": "14px 16px", "border": "1.5px solid #52525B", "borderRadius": "14px", "background": "#0B0B0C", "color": "#F5F5F5", "resize": "vertical" }} />
            </label>
            <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px" }}>
              <button type="submit" style={{ "background": "var(--accent)", "color": "#0B0B0C", "border": "0", "font": "inherit", "fontWeight": "700", "fontSize": "18px", "padding": "16px 40px", "borderRadius": "999px", "cursor": "pointer", "minHeight": "48px" }}>
                {"Send"}
              </button>
              <span style={{ "fontSize": "14px", "color": "#A1A1AA" }}>
                {"See our "}
                <Link href="/privacy">
                  {"Privacy Policy"}
                </Link>
                {" for how we use your details."}
              </span>
            </div>
          </form>
          )}
        </div>
      </main>
    </>
  );
}
