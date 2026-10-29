import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Meg's Pets by phone, email, WhatsApp or the enquiry form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
