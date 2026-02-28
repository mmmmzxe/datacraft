import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Enroll or Ask a Question",
  description:
    "Get in touch with DataCraft Academy. Enroll in our next beginner cohort, ask a question about our curriculum, or learn more about our hands-on data engineering training.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
