"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PawIcon from "./PawIcon";

const NAV = [
  { href: "/walks-and-prices", label: "Walks & prices" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/meet-the-team", label: "Meet the team" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header style={{ background: "var(--bg)", borderBottom: "1px solid #2A2A2E" }}>
      <nav
        aria-label="Main"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "var(--fg)" }}
        >
          <PawIcon />
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              letterSpacing: "-0.5px",
            }}
          >
            Meg&apos;s Pets
          </span>
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", fontWeight: 500, fontSize: "16px" }}>
          {NAV.map(({ href, label }) => {
            const current = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={current ? "page" : undefined}
                style={{
                  color: "var(--fg)",
                  textDecoration: current ? "underline" : "none",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{
              background: "var(--accent)",
              color: "#0B0B0C",
              textDecoration: "none",
              fontWeight: 700,
              padding: "12px 22px",
              borderRadius: "999px",
              minHeight: "44px",
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
