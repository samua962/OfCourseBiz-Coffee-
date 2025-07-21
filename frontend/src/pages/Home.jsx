import React from "react";
import Hero from "../components/Hero"; // Your main welcome section
import Services from "./Services";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Gallery from "./Gallery";
import InfoCenter from "./InfoCenter"; // Assuming you have an InfoCenter component
import Contact from "./Contact"; // Assuming you have a Contact component
import About from "./About"; // Assuming you have an About component
import HomeMenuPreview from "../components/HomeMenuPreview";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="infocenter">
        <InfoCenter />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="reservations">
        <Reservations />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
