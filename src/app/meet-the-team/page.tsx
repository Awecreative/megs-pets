import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the team",
  description: "Meet Meg, Tor and Nige, the people behind the paws.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <main style={{ "maxWidth": "1200px", "margin": "0 auto", "padding": "72px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "56px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "maxWidth": "680px" }}>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 64px)", "letterSpacing": "-1.5px", "lineHeight": "1.04" }}>
            {"Meet the Team."}
          </h1>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", "gap": "24px", "alignItems": "start" }}>
          <article style={{ "background": "#18181B", "borderRadius": "28px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
            <div style={{ "height": "450px", "background": "#000000", "position": "relative", "overflow": "hidden" }}>
              <img src={asset("/images/hero.jpg")} alt="Meg holding a small fluffy dog beside the Meg's Pets van" width="1200" height="1600" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%" }} />
              <span style={{ "position": "absolute", "top": "20px", "left": "20px", "background": "var(--accent)", "color": "#0B0B0C", "fontWeight": "700", "fontSize": "25px", "padding": "6px 12px", "borderRadius": "999px" }}>
                {"Owner"}
              </span>
            </div>
            <div style={{ "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "10px", "position": "relative" }}>
              <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "30px" }}>
                {"Meg"}
              </h2>
              <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "28px", "color": "var(--leaf)" }}>
                {"Dog Walker"}
              </p>
              <p style={{ "margin": "0", "fontSize": "23px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
                <br />
                {"Hi, I'm Meg! \ud83e\ude77"}
                <br />
                <br />
                {"I've been running Meg's Pets for 13 years and caring for animals has always been a huge passion of mine. Growing up I had Dogs, Cats, Rabbits and a Horse. I absolutely adore animals. I love what I do and feel so lucky to spend my days with our four legged furry friends!\u00a0"}
                <br />
                <br />
                {"As a proud mum to my two little ones, Luca and Myla, I understand how important it is to find someone you can trust with your furry family members. I treat every pet as if they were my own, making sure they feel safe, happy and loved when in my care.\u00a0"}
                <br />
                <br />
                {"I love getting to know each dog's individual personalites and making sure they get all the care, attention and exercise they deserve."}
                <br />
                <br />
              </p>
            </div>
          </article>
          <article style={{ "background": "#18181B", "borderRadius": "28px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
            <div style={{ "height": "450px", "background": "#1F1F23", "position": "relative", "overflow": "hidden" }}>
              <img src={asset("/images/tor.jpg")} alt="Tor, dog walker" width="720" height="960" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 30%" }} />
            </div>
            <div style={{ "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "30px" }}>
                {"Tor"}
              </h2>
              <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "28px", "color": "var(--leaf)" }}>
                {"Dog walker\u00a0"}
              </p>
              <p style={{ "margin": "0", "fontSize": "23px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
                <br />
                {"Hey, Im Tor! \ud83e\ude77 "}
                <br />
                <br />
                {"I joined the Meg's Pets team about 18 months ago, after previously working in a school and the corporate world. I've always been an animal lover and love being outdoors...whatever the British weather throws at us."}
                <br />
                <br />
                {"I love getting to know all the dogs different characters and loving them like I do my own. I grew up with Dogs, Cats, Rabbits, Guinea Pigs and I now have my own Dog and Cat, Angel and Theo. I have two beautiful daughters and equally gorgeous step daughters."}
                <br />
                <br />
                {"In my spare time I love walking, running, going to the gym, Pilates, eating and an occasional tipple or two."}
              </p>
            </div>
          </article>
          <article style={{ "background": "#18181B", "borderRadius": "28px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
            <div style={{ "height": "450px", "background": "#1F1F23", "position": "relative", "overflow": "hidden" }}>
              <img src={asset("/images/nige.jpg")} alt="Nige, dog walker, with a black and white dog" width="1170" height="1401" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 40%" }} />
            </div>
            <div style={{ "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "30px" }}>
                {"Nige"}
              </h2>
              <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "28px", "color": "var(--leaf)" }}>
                {"Dog Walker"}
              </p>
              <p style={{ "margin": "0", "fontSize": "23px", "lineHeight": "1.55", "color": "#B4B4BC" }}>
                <br />
                {"Everyone meet Nige! \ud83d\udc99"}
                <br />
                <br />
                {"Nige joined the team in March 2023, he came on board when Meg went on maternity leave. He loves being out walking in the countryside with the doggies."}
                <br />
                <br />
                {"Nige now enjoys retirement with his family and grandchildren. He plays in a band and enjoys a nice glass of red wine. However, he is still around to cover and help out if we need him."}
              </p>
            </div>
          </article>
        </div>
        <div style={{ "background": "#18181B", "border": "2px solid var(--accent)", "color": "#FFFFFF", "borderRadius": "36px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "24px" }}>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "maxWidth": "620px" }}>
            <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-1px" }}>
              {"Come and say hello"}
            </h2>
            <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.55", "color": "#D4D4D8" }}>
              {"Book a free meet & greet and meet your walker in person."}
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
