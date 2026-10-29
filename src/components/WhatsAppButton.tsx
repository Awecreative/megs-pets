import { CONTACT } from "@/lib/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Meg's Pets on WhatsApp"
      title="Message us on WhatsApp"
      className="whatsapp-float"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0B0C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3z" />
        <path d="M9.2 8.6c-.4 0-.8.4-.8 1 0 2.6 2.6 5.3 5.3 5.4.6 0 1-.4 1-.8v-.9l-1.6-.6-.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-.6-1.6z" />
      </svg>
    </a>
  );
}
