import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Legacy } from "@/components/site/Legacy";
import { Events } from "@/components/site/Events";
import { Experiences } from "@/components/site/Experiences";
import { Stats } from "@/components/site/Stats";
import { Speakers } from "@/components/site/Speakers";
import { Countdown } from "@/components/site/Countdown";
import { Sponsors } from "@/components/site/Sponsors";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Techfest 2026 · 30th Edition - Cyborg Renaissance · IIT Bombay",
  description:
    "Techfest 2026, the 30th edition of Asia's largest science and technology festival, returns to IIT Bombay with the theme Cyborg Renaissance.",
  openGraph: {
    title: "Techfest 2026 · Cyborg Renaissance",
    description:
      "Thirty years of engineering the future. Asia's largest science and technology festival returns to IIT Bombay, Dec 28, 2026.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Legacy />
      <Events />
      <Experiences />
      <Stats />
      <Speakers />
      <Countdown />
      <Sponsors />
      <CTA />
      <Footer />
    </main>
  );
}
