import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import ExperiencedPeers from "../Components/ExperiencedPeers";
import Testimonials from "../Components/Testimonials";
import FeedbackSection from "../Components/FeedbackSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <ExperiencedPeers />
      <Testimonials />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Home;
