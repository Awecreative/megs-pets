import Link from "next/link";
import { CONTACT } from "@/lib/contact";

const linkStyle = { color: "#D4D4D8" };

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid #2A2A2E", padding: "40px 24px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "24px",
          fontSize: "15px",
          color: "#A1A1AA",
        }}
      >
        <span style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 800, fontSize: "20px", color: "var(--fg)" }}>
          Meg&apos;s Pets
        </span>
        <span>
          Dog walking in Crawley, Crawley Down &amp; East Grinstead ·{" "}
          <a href={`mailto:${CONTACT.email}`} style={linkStyle}>
            {CONTACT.email}
          </a>{" "}
          ·{" "}
          <a href={CONTACT.tel} style={linkStyle}>
            {CONTACT.phone}
          </a>{" "}
          ·{" "}
          <a
            href={CONTACT.whatsapp}
            style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "6px", verticalAlign: "middle" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--leaf)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3z" />
              <path d="M9.2 8.6c-.4 0-.8.4-.8 1 0 2.6 2.6 5.3 5.3 5.4.6 0 1-.4 1-.8v-.9l-1.6-.6-.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-.6-1.6z" />
            </svg>
            WhatsApp
          </a>
        </span>
        <span>
          © 2026 Meg&apos;s Pets ·{" "}
          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>{" "}
          ·{" "}
          <Link href="/terms" style={linkStyle}>
            Terms &amp; Conditions
          </Link>{" "}
          ·{" "}
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
}
