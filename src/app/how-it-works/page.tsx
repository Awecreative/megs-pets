import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description: "From a free meet & greet to regular walks: how Meg's Pets works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <main style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "56px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "maxWidth": "680px" }}>
          <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "15px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "var(--leaf)" }}>
            {"How it works"}
          </p>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 64px)", "letterSpacing": "-1.5px", "lineHeight": "1.04" }}>
            {"Three easy steps to a happy dog."}
          </h1>
          <p style={{ "margin": "0", "fontSize": "19px", "lineHeight": "1.6", "color": "#B4B4BC" }}>
            {"From first hello to regular walks, here's what to expect."}
          </p>
        </div>
        <ol style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", "gap": "24px" }}>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "var(--accent)", "color": "#0B0B0C", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "24px" }}>
              {"1"}
            </span>
            <h2 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
              {"Free meet & greet"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
              {"Meg pops round to meet you and your dog, and learns their routine, quirks and favourite treats."}
            </p>
          </li>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "var(--accent)", "color": "#0B0B0C", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "24px" }}>
              {"2"}
            </span>
            <h2 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
              {"Pick your walks"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
              {"Choose regular slots or book one-offs when you need them. Changes are easy."}
            </p>
          </li>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "var(--accent)", "color": "#0B0B0C", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "24px" }}>
              {"3"}
            </span>
            <h2 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
              {"Relax \u2014 we've got this"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
              {"You get a message and photos after every walk, and come home to a tired, happy dog."}
            </p>
          </li>
        </ol>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "maxWidth": "760px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "32px" }}>
            {"Good to know"}
          </h2>
          <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "12px", "fontSize": "17px", "lineHeight": "1.5" }}>
            <li style={{ "display": "flex", "gap": "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                <path d="M5 12l5 5 9-10" />
              </svg>
              {"Keys are kept safely [in a coded lockbox / with Meg]."}
            </li>
            <li style={{ "display": "flex", "gap": "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                <path d="M5 12l5 5 9-10" />
              </svg>
              {"[Cancellation policy \u2014 e.g. free up to 24 hours before.]"}
            </li>
            <li style={{ "display": "flex", "gap": "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                <path d="M5 12l5 5 9-10" />
              </svg>
              {"[How and when you pay.]"}
            </li>
          </ul>
        </div>
        <div style={{ "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "36px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "24px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "maxWidth": "620px" }}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-1px" }}>
              {"Start with step one"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.55", "color": "#D4D4D8" }}>
              {"Book your free meet & greet today."}
            </p>
          </div>
          <Link href="/contact" style={{ "background": "var(--accent)", "color": "#0B0B0C", "textDecoration": "none", "fontWeight": "700", "fontSize": "18px", "padding": "16px 30px", "borderRadius": "999px" }}>
            {"Get in touch"}
          </Link>
        </div>
      </main>
    </>
  );
}
