import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walks & prices",
  description: "Group dog walks, puppy and home visits, and cat visits \u2014 with prices.",
};

export default function WalksAndPricesPage() {
  return (
    <>
      <main style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "48px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "maxWidth": "680px" }}>
          <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "15px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "var(--leaf)" }}>
            {"Walks & prices"}
          </p>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 64px)", "letterSpacing": "-1.5px", "lineHeight": "1.04" }}>
            {"A walk for every dog."}
          </h1>
          <p style={{ "margin": "0", "fontSize": "19px", "lineHeight": "1.6", "color": "#B4B4BC" }}>
            {"Every walk includes pick-up and drop-off, fresh water, a towel-down on muddy days and a photo update."}
          </p>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", "gap": "24px" }}>
          <article style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5.2 9.2 4.5 3.5l4.6 3.2a9 9 0 0 1 5.8 0l4.6-3.2-.7 5.7c1.3 1.8 1.6 4.4.8 6.6-1 2.9-3.8 4.7-7.6 4.7s-6.6-1.8-7.6-4.7c-.8-2.2-.5-4.8.8-6.6z" />
              <circle cx="9.3" cy="12.3" r="0.6" />
              <circle cx="14.7" cy="12.3" r="0.6" />
              <path d="M11.2 15h1.6l-.8.9z" />
              <path d="M2.5 14.2l4 .6M2.8 16.8l3.9-.6M21.5 14.2l-4 .6M21.2 16.8l-3.9-.6" />
            </svg>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px" }}>
              {"Cat Visits"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "22px", "lineHeight": "1.55", "color": "#B4B4BC", "flexGrow": "1" }}>
              {"Whilst you're away on holiday or just enjoying a day out.\u00a0"}
              <br />
              <br />
              {"- Feeding and Fresh water\u00a0"}
              <br />
              {"- Empty and freshen up their litter tray"}
              <br />
              {"- Lots of love and cuddles"}
              <br />
              {"- Send lots of pictures of your happy and content pet"}
              <br />
              {"- Make sure your home is safe and secure whilst you're away"}
            </p>
            <p style={{ "margin": "0", "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px" }}>
                {"\u00a39"}
              </span>
              <span style={{ "color": "#D4D4D8", "fontSize": "15px" }}>
                {"per visit"}
              </span>
            </p>
          </article>
          <article style={{ "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "16px", "minHeight": "413px" }}>
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11.25 16.25h1.5L12 17z" />
                <path d="M16 14v.5" />
                <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
                <path d="M8 14v.5" />
                <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
              </svg>
              <span style={{ "background": "var(--accent)", "color": "#0B0B0C", "fontWeight": "700", "fontSize": "13px", "padding": "6px 12px", "borderRadius": "999px" }}>
                {"Most popular"}
              </span>
            </div>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px" }}>
              {"Group Dog Walk"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "22px", "lineHeight": "1.55", "color": "#D4D4D8", "flexGrow": "1" }}>
              {"An hour of fun with a small group of friendly dogs. We have a maximum of 6 dogs, this means everyone gets all the love and attention."}
            </p>
            <p style={{ "margin": "0", "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px" }}>
                {"\u00a316"}
              </span>
              <span style={{ "color": "#D4D4D8", "fontSize": "15px" }}>
                {"per dog"}
              </span>
            </p>
            <p style={{ "margin": "-8px 0 0", "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "8px" }}>
              <span style={{ "color": "#D4D4D8", "fontSize": "15px" }}>
                {"Two dogs from the same household"}
              </span>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "24px" }}>
                {"\u00a324"}
              </span>
            </p>
          </article>
          <article style={{ "background": "#18181B", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="5.5" cy="10" r="2" />
              <circle cx="9.5" cy="5.5" r="2" />
              <circle cx="14.5" cy="5.5" r="2" />
              <circle cx="18.5" cy="10" r="2" />
              <path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.7 2.4 1.1 0 1.8-.6 2.8-.6s1.7.6 2.8.6c1.5 0 2.7-.8 2.7-2.4C17.5 15.2 15 12 12 12z" />
            </svg>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px" }}>
              {"Puppy & Home Visit"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "22px", "lineHeight": "1.55", "color": "#B4B4BC", "flexGrow": "1" }}>
              {"A short visit for a garden toilet break, a play, dinner and a cuddle. This is ideal for puppies and older dogs."}
            </p>
            <p style={{ "margin": "0", "display": "flex", "alignItems": "baseline", "gap": "8px" }}>
              <span style={{ "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px" }}>
                {"\u00a310"}
              </span>
              <span style={{ "color": "#D4D4D8", "fontSize": "15px" }}>
                {"per dog"}
              </span>
            </p>
          </article>
        </div>
        <p style={{ "margin": "0", "fontSize": "20px", "color": "#A1A1AA" }}>
          {"We also offer weekend walks depending on our availability.\u00a0"}
        </p>
        <div style={{ "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "36px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "24px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "maxWidth": "620px" }}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-1px" }}>
              {"Not sure which walk?"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.55", "color": "#D4D4D8" }}>
              {"Book a free meet & greet and Meg will help you pick."}
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
