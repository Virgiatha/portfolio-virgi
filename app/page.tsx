import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { site } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Data, AI & Web Engineer",
  url: siteUrl,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Banjarbaru", addressCountry: "ID" },
  sameAs: [site.linkedin],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </>
  );
}
