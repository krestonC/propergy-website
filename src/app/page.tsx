"use client";

import { useState } from "react";
import EntryGate from "@/components/EntryGate";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WordReveal from "@/components/WordReveal";
import GiantText from "@/components/GiantText";
import ServicesHeader from "@/components/ServicesHeader";
import ServiceBlock from "@/components/ServiceBlock";
import Differentiators from "@/components/Differentiators";
import QuoteSection from "@/components/QuoteSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Professional Trustee Services",
    description:
      "Independent trustee support for high-risk decisions, governance stability, and reduced liability exposure.",
    variant: "light" as const,
    fromDirection: "left" as const,
  },
  {
    number: "02",
    title: "Dispute & Regulatory Support",
    description:
      "Specialist guidance through CSOS, municipal, and stakeholder disputes with a resolution-focused approach.",
    variant: "dark" as const,
    fromDirection: "right" as const,
  },
  {
    number: "03",
    title: "Project Management & Independent Oversight",
    description:
      "Independent oversight ensuring capital projects align with governance, compliance, and delivery outcomes.",
    variant: "light" as const,
    fromDirection: "left" as const,
  },
  {
    number: "04",
    title: "Specialist Building Management",
    description:
      "Hands-on, senior-level oversight providing control, accountability, and execution in complex buildings.",
    variant: "dark" as const,
    fromDirection: "right" as const,
  },
  {
    number: "05",
    title: "Financial & Governance Support Services",
    description:
      "Strategic financial oversight for informed, defensible decision-making.",
    variant: "light" as const,
    fromDirection: "left" as const,
  },
  {
    number: "06",
    title: "Executive Managing Agent",
    description:
      "Expert, hands-on oversight for complex buildings, ensuring efficiency, compliance, and long-term value.",
    variant: "dark" as const,
    fromDirection: "right" as const,
  },
];

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <EntryGate onEnter={() => setEntered(true)} />}

      {entered && (
        <>
          <Nav />
          <main>
            <Hero />
            <WordReveal />
            <GiantText />
            <ServicesHeader />
            {services.map((service, i) => (
              <ServiceBlock key={i} {...service} />
            ))}
            <Differentiators />
            <QuoteSection />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
