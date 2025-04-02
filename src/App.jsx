import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Project2 from "./components/Project/Project2";
import BackToTop from "./components/BackToTop/BackToTop"; // Import component
import Chatbox from "./components/Chatbox/ChatBox"; // Import Chatbox
import SocialIcons from "./components/SocialIcons/SocialIcons"; // Import SocialIcons

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Project2 />
      <Project />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
      <BackToTop /> {/* Sử dụng component */}

    </main>
  );
};

export default App;
