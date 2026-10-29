import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Meg's Pets services.",
};

export default function TermsPage() {
  return (
    <>
      <main style={{ "maxWidth": "820px", "margin": "0 auto", "padding": "64px 24px 96px", "display": "flex", "flexDirection": "column", "gap": "36px", "fontSize": "17px", "lineHeight": "1.65", "color": "#D4D4D8" }}>
        <p style={{ "margin": "0", "background": "#2A1220", "border": "1px solid var(--accent)", "borderRadius": "14px", "padding": "14px 18px", "fontSize": "15px", "lineHeight": "1.5", "color": "#FFC2DF" }}>
          {"Template \u2014 please review these terms (ideally with a legal adviser) and fill in every [PLACEHOLDER] before the site goes live."}
        </p>
        <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
          <p style={{ "margin": "0", "fontWeight": "700", "fontSize": "15px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "var(--leaf)" }}>
            {"Legal"}
          </p>
          <h1 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 5vw, 56px)", "letterSpacing": "-1.5px", "lineHeight": "1.05", "color": "#F5F5F5" }}>
            {"Terms & Conditions"}
          </h1>
          <p style={{ "margin": "0", "color": "#A1A1AA", "fontSize": "15px" }}>
            {"Last updated: [DATE]"}
          </p>
        </div>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"1. Our service"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Meg's Pets provides a dog walking and pet care service in Crawley, Crawley Down and East Grinstead. We will agree on the services, dates and times in advance."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"2. Booking and confirmation"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"All new clients start with a free meet & greet, where we complete a registration form for each pet. A booking is only confirmed once we have confirmed it to you in writing (by text, email or app message). We may decline a booking if we don't think we can care for your pet safely."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"3. Payment"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Prices are shown on our Walks & prices page and are in pounds sterling. Payment is due [IN ADVANCE / WEEKLY / WITHIN X DAYS OF INVOICE] by [BANK TRANSFER / CARD / OTHER]. We may pause services if payments are more than [X DAYS] overdue. We will give you at least [X WEEKS] notice of any price change."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"4. Cancellations"}
          </h2>
          <ul style={{ "margin": "0", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
            <li>
              {"You can cancel free of charge with at least [X HOURS] notice."}
            </li>
            <li>
              {"Cancellations with less than [X HOURS] notice are charged at [X% / \u00a3X]."}
            </li>
            <li>
              {"If we arrive and cannot access your home or pet, the full fee is payable."}
            </li>
            <li>
              {"If we have to cancel, we will give you as much notice as possible and you will not be charged."}
            </li>
          </ul>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"5. Weather and safety"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Your pet's safety comes first. In extreme heat, ice, storms or other unsafe conditions we may shorten a walk, change the route or swap it for a home visit with play and enrichment. The usual fee still applies."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"6. Behaviour"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"You must tell us about any aggression, reactivity, fearfulness, escape attempts or other behaviour that could put your dog, other animals or people at risk. If your dog's behaviour becomes unsafe we may move them to solo walks or end the service. You are responsible for any damage or injury caused by your dog's behaviour."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"7. Health and vaccinations"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Pets must be up to date with vaccinations, flea and worm treatment. Dogs must be microchipped and wear a collar and ID tag as required by law. Please tell us about any medical conditions, medication, allergies or recent illness. We won't walk a pet that seems unwell and will contact you if we have any concerns."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"8. Keys and home access"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"Keys and alarm codes are stored securely and labelled with a code, never with your address. Keys are kept [IN A LOCKBOX / BY MEG] and returned when services end. Please tell us about any changes to locks, alarms or access arrangements."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"9. Group walks"}
          </h2>
          <ul style={{ "margin": "0", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
            <li>
              {"Groups are a maximum of 6 dogs, matched by size and temperament."}
            </li>
            <li>
              {"Dogs must have had a trial walk before joining a group."}
            </li>
            <li>
              {"Dogs are only let off lead with your written permission and a reliable recall."}
            </li>
            <li>
              {"Unneutered males over [X MONTHS] and females in season can't join group walks."}
            </li>
          </ul>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"10. Emergency vet care"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"If your pet is injured or becomes ill in our care, we will try to contact you and your emergency contact straight away. If we can't reach you, you authorise us to take your pet to your registered vet (or the nearest available vet) and agree to their recommended treatment. You are responsible for all vet costs, and for any transport costs of [\u00a3X]."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"11. Liability and insurance"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"We are fully insured and DBS checked, and we take every reasonable care of your pet and home. Our insurance covers [PUBLIC LIABILITY / CARE, CUSTODY & CONTROL / KEY COVER] up to [\u00a3X]. We are not liable for illness, injury or loss that is not caused by our negligence, including pre-existing conditions. Nothing in these terms limits liability that cannot be limited by law."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"12. Photos and social media"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"We send photos and updates after every visit. With your permission we may also share photos of your pet on our website and social media. We never show your address or identify your home. You can withdraw permission at any time."}
          </p>
        </section>
        <section style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
          <h2 style={{ "margin": "0", "fontFamily": "var(--font-display), sans-serif", "fontWeight": "700", "fontSize": "26px", "color": "#F5F5F5" }}>
            {"13. Changes to these terms"}
          </h2>
          <p style={{ "margin": "0" }}>
            {"We may update these terms from time to time. We will tell existing clients about important changes at least [X WEEKS] before they take effect. Questions? Contact us at meg_richman@hotmail.co.uk."}
          </p>
        </section>
      </main>
    </>
  );
}
