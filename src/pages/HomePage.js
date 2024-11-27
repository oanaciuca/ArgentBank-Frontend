import React from "react";
import NavBar from '../components/NavBar';
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
