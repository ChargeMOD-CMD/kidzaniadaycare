import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { LearningGalaxy } from "@/components/site/LearningGalaxy";
import { Classroom } from "@/components/site/Classroom";
import { Safety } from "@/components/site/Safety";
import { Parents } from "@/components/site/Parents";
import { Admissions } from "@/components/site/Admissions";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <LearningGalaxy />
      <Classroom />
      <Safety />
      <Gallery />
      <Parents />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  );
}
