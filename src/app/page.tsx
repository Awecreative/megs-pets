import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Friendly, reliable dog walking, puppy visits and cat visits in Crawley, Crawley Down and East Grinstead. Fully insured and DBS checked.",
};

export default function HomePage() {
  return (
    <>
      <section style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 88px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", "gap": "56px", "alignItems": "center", "position": "relative" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "24px", "position": "relative" }}>
          <p style={{ "margin": "0", "fontSize": "20px", "lineHeight": "1.55", "color": "#B4B4BC", "maxWidth": "520px" }}>
            {"A family run business covering Crawley, Crawley Down, East Grinstead and Surrounding Areas.\u00a0"}
          </p>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "14px", "marginTop": "8px" }}>
            <Link href="/contact" style={{ "background": "var(--accent)", "color": "#0B0B0C", "textDecoration": "none", "fontWeight": "700", "fontSize": "18px", "padding": "16px 30px", "borderRadius": "999px" }}>
              {"Get in touch"}
            </Link>
            <Link href="/walks-and-prices" style={{ "background": "transparent", "color": "#F5F5F5", "textDecoration": "none", "fontWeight": "700", "fontSize": "18px", "padding": "14px 28px", "borderRadius": "999px", "border": "2px solid #F5F5F5" }}>
              {"See walks & prices"}
            </Link>
          </div>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px", "marginTop": "12px", "fontSize": "15px", "color": "#B4B4BC" }}>
            <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                {"Fully Insured and DBS checked"}
              </span>
            </span>
            <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <circle cx="12" cy="13.5" r="3.5" />
                <path d="M8 7l1.5-3h5L16 7" />
              </svg>
              {"Photo updates every walk"}
            </span>
          </div>
          <h1 className="sr-only">
            {"Meg's Pets — dog walking and pet care in Crawley, Crawley Down and East Grinstead"}
          </h1>
        </div>
        <div style={{ "position": "relative", "minHeight": "480px", "borderRadius": "32px", "background": "#1F1F23", "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "width": "100%", "maxWidth": "385px", "height": "464px" }}>
          <img src={asset("/images/hero.jpg")} alt="Meg holding a small fluffy dog beside the Meg's Pets van" width="1200" height="1600" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "60% 30%" }} />
        </div>
        <img className="hero-logo" src={asset("/images/logo.jpg")} alt="Meg's Pets — your local pet nanny" width="1170" height="230" style={{ "position": "absolute", "left": "19px", "top": "33px", "width": "549px", "height": "97px", "mixBlendMode": "lighten" }} />
      </section>
      <section style={{ "background": "#18181B", "padding": "96px 24px" }}>
        <div style={{ "maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "44px", "letterSpacing": "-1px", "lineHeight": "1.05" }}>
            {"Everything you need to know"}
          </h2>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", "gap": "24px" }}>
            <Link href="/walks-and-prices" style={{ "background": "#0B0B0C", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "textDecoration": "none", "color": "#F5F5F5" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="5.5" cy="10" r="2" />
                <circle cx="9.5" cy="5.5" r="2" />
                <circle cx="14.5" cy="5.5" r="2" />
                <circle cx="18.5" cy="10" r="2" />
                <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
              </svg>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "24px" }}>
                {"Walks & prices"}
              </span>
              <span style={{ "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC", "flexGrow": "1", "position": "relative" }}>
                <span>
                  {"Group Walks, Solo Walks, Pop in Visits, and Cat Visits\u00a0"}
                </span>
              </span>
              <span style={{ "fontWeight": "700", "color": "var(--leaf)" }}>
                {"See walks & prices \u2192"}
              </span>
            </Link>
            <Link href="/how-it-works" style={{ "background": "#0B0B0C", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "textDecoration": "none", "color": "#F5F5F5" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h10" />
              </svg>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "24px" }}>
                {"How it works"}
              </span>
              <span style={{ "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC", "flexGrow": "1" }}>
                {"A free meet & greet so we can say hello to your furry friend and arrange their needs."}
              </span>
              <span style={{ "fontWeight": "700", "color": "var(--leaf)" }}>
                {"How it works \u2192"}
              </span>
            </Link>
            <Link href="/meet-the-team" style={{ "background": "#0B0B0C", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "textDecoration": "none", "color": "#F5F5F5" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="8" r="3" />
                <path d="M2 20c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
                <path d="M14 14.6c.6-.1 1.3-.1 2-.1 3.3 0 6 2.5 6 5.5" />
              </svg>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "24px" }}>
                {"Meet the team"}
              </span>
              <span style={{ "fontSize": "16px", "lineHeight": "1.55", "color": "#B4B4BC", "flexGrow": "1" }}>
                {"The People behind the Paws."}
              </span>
              <span style={{ "fontWeight": "700", "color": "var(--leaf)" }}>
                {"Meet the team \u2192"}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section style={{ "padding": "96px 24px" }}>
        <div style={{ "maxWidth": "1200px", "margin": "0 auto", "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "36px", "padding": "64px 48px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "32px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "620px" }}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "44px", "letterSpacing": "-1px", "lineHeight": "1.05" }}>
              {"Ready for a walk?"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.55", "color": "#D4D4D8" }}>
              {"Book a free meet & greet and we'll find the right walks for your dog."}
            </p>
          </div>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "14px" }}>
            <Link href="/contact" style={{ "background": "var(--accent)", "color": "#0B0B0C", "textDecoration": "none", "fontWeight": "700", "fontSize": "18px", "padding": "16px 30px", "borderRadius": "999px" }}>
              {"Get in touch"}
            </Link>
            <a href="tel:+447900490887" style={{ "color": "#FFFFFF", "textDecoration": "none", "fontWeight": "700", "fontSize": "18px", "padding": "14px 28px", "borderRadius": "999px", "border": "2px solid #FFFFFF" }}>
              {"Call 07900 490887"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
