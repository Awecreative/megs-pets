import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description: "From a free meet & greet to regular walks: how Meg's Pets works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <main style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "56px" }}>
        <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "flex-start", "justifyContent": "space-between", "gap": "32px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "flex": "1 1 360px", "maxWidth": "600px" }}>
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
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "16px", "alignItems": "flex-start", "flex": "0 1 auto", "marginLeft": "auto" }}>
            <div style={{ "position": "relative", "width": "200px", "maxWidth": "100%", "height": "288px", "border": "3px solid var(--accent)", "borderRadius": "18px", "boxSizing": "border-box", "background": "#1F1F23", "overflow": "hidden" }}>
              <img src={asset("/images/how-pet-1.jpg")} alt="A pet in the care of Meg's Pets" width="1113" height="1600" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 40%" }} />
            </div>
            <div style={{ "position": "relative", "width": "300px", "maxWidth": "100%", "height": "228px", "border": "3px solid var(--accent)", "borderRadius": "18px", "boxSizing": "border-box", "background": "#1F1F23", "overflow": "hidden" }}>
              <img src={asset("/images/how-pet-2.jpg")} alt="A pet in the care of Meg's Pets" width="1600" height="1200" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%" }} />
            </div>
          </div>
        </div>
        <ol style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", "gap": "24px" }}>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "position": "relative", "width": "64px", "height": "64px", "display": "block" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true" style={{ "position": "absolute", "inset": "0" }}>
                <circle cx="5" cy="9.5" r="2.3" />
                <circle cx="9.2" cy="4.8" r="2.3" />
                <circle cx="14.8" cy="4.8" r="2.3" />
                <circle cx="19" cy="9.5" r="2.3" />
                <path d="M12 10.5c-3.6 0-6.6 3.8-6.6 6.9 0 2 1.4 3.1 3.2 3.1 1.4 0 2.2-.8 3.4-.8s2 .8 3.4.8c1.8 0 3.2-1.1 3.2-3.1 0-3.1-3-6.9-6.6-6.9z" />
              </svg>
              <span style={{ "position": "absolute", "left": "0", "right": "0", "top": "35px", "textAlign": "center", "color": "#0B0B0C", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "18px", "lineHeight": "1" }}>
                {"1"}
              </span>
            </span>
            <h2 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
              {"Free Meet & Greet"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
              {"We pop round to meet you and your dog, and learn their routine, quirks and favourite treats."}
            </p>
          </li>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "position": "relative", "width": "64px", "height": "64px", "display": "block" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true" style={{ "position": "absolute", "inset": "0" }}>
                <circle cx="5" cy="9.5" r="2.3" />
                <circle cx="9.2" cy="4.8" r="2.3" />
                <circle cx="14.8" cy="4.8" r="2.3" />
                <circle cx="19" cy="9.5" r="2.3" />
                <path d="M12 10.5c-3.6 0-6.6 3.8-6.6 6.9 0 2 1.4 3.1 3.2 3.1 1.4 0 2.2-.8 3.4-.8s2 .8 3.4.8c1.8 0 3.2-1.1 3.2-3.1 0-3.1-3-6.9-6.6-6.9z" />
              </svg>
              <span style={{ "position": "absolute", "left": "0", "right": "0", "top": "35px", "textAlign": "center", "color": "#0B0B0C", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "18px", "lineHeight": "1" }}>
                {"2"}
              </span>
            </span>
            <h2 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
              {"Pick your walks"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
              {"We discuss the days and times you need and get them in the diary."}
            </p>
          </li>
          <li style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span style={{ "position": "relative", "width": "64px", "height": "64px", "display": "block" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true" style={{ "position": "absolute", "inset": "0" }}>
                <circle cx="5" cy="9.5" r="2.3" />
                <circle cx="9.2" cy="4.8" r="2.3" />
                <circle cx="14.8" cy="4.8" r="2.3" />
                <circle cx="19" cy="9.5" r="2.3" />
                <path d="M12 10.5c-3.6 0-6.6 3.8-6.6 6.9 0 2 1.4 3.1 3.2 3.1 1.4 0 2.2-.8 3.4-.8s2 .8 3.4.8c1.8 0 3.2-1.1 3.2-3.1 0-3.1-3-6.9-6.6-6.9z" />
              </svg>
              <span style={{ "position": "absolute", "left": "0", "right": "0", "top": "35px", "textAlign": "center", "color": "#0B0B0C", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "18px", "lineHeight": "1" }}>
                {"3"}
              </span>
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
              {"Keys are kept safe with us."}
            </li>
            <li style={{ "display": "flex", "gap": "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                <path d="M5 12l5 5 9-10" />
              </svg>
              {"We have a 24 hour cancellation policy."}
            </li>
            <li style={{ "display": "flex", "gap": "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ "flexShrink": "0", "marginTop": "2px" }}>
                <path d="M5 12l5 5 9-10" />
              </svg>
              {"We invoice at the end of the month."}
            </li>
          </ul>
        </div>
        <div style={{ "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "36px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "24px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "maxWidth": "620px" }}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-1px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "14px" }}>
              {"Start with step one"}
              <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px" }} aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--accent)" style={{ "transform": "rotate(-15deg)" }}>
                  <circle cx="5.5" cy="10" r="2.2" />
                  <circle cx="9.5" cy="5.5" r="2.2" />
                  <circle cx="14.5" cy="5.5" r="2.2" />
                  <circle cx="18.5" cy="10" r="2.2" />
                  <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--accent)" style={{ "transform": "rotate(10deg) translateY(-6px)" }}>
                  <circle cx="5.5" cy="10" r="2.2" />
                  <circle cx="9.5" cy="5.5" r="2.2" />
                  <circle cx="14.5" cy="5.5" r="2.2" />
                  <circle cx="18.5" cy="10" r="2.2" />
                  <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
                </svg>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--accent)" style={{ "transform": "rotate(-15deg)" }}>
                  <circle cx="5.5" cy="10" r="2.2" />
                  <circle cx="9.5" cy="5.5" r="2.2" />
                  <circle cx="14.5" cy="5.5" r="2.2" />
                  <circle cx="18.5" cy="10" r="2.2" />
                  <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
                </svg>
              </span>
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.55", "color": "#D4D4D8" }}>
              {"Book your free Meet & Greet today."}
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
