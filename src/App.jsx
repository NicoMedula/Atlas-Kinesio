import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
