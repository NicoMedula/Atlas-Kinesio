import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AnimatedSection from "./components/common/AnimatedSection";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <AnimatedSection animation="fade-up">
            <Services />
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <About />
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <Gallery />
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
