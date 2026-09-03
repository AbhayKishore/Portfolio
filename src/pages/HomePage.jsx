import Hero from "../sections/Hero";
import About from "../sections/About";
import FeaturedProjects from "../sections/FeaturedProjects";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Certifications from "../sections/Certifications";
import Achievements from "../sections/Achievements";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

import Footer from "../components/Footer";

export default function HomePage({
  sidebarCollapsed,
  onNavigate,
  onOpenServices,
}) {
  return (
    <main
      className={`page-content ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <Hero />

      <About />

      <FeaturedProjects />

      <Education />

      <Experience />

      <Certifications />

      <Achievements />

      <Skills />

      <Contact />

      <Footer
        onNavigate={onNavigate}
        onOpenServices={onOpenServices}
      />
    </main>
  );
}