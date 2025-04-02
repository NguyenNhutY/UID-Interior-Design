import React, { Suspense, lazy } from "react";

// Sử dụng lazy loading
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Brands = lazy(() => import("./components/Brands/Brands"));
const Services = lazy(() => import("./components/Services/Services"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const Banner2 = lazy(() => import("./components/Banner/Banner2"));
const Testimonial = lazy(() => import("./components/Testimonial/Testimonial"));
const Newsletter = lazy(() => import("./components/Newsletter/Newsletter"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Project = lazy(() => import("./components/Project/Project"));
const Project2 = lazy(() => import("./components/Project/Project2"));
const BackToTop = lazy(() => import("./components/BackToTop/BackToTop"));

const App = () => {
  return (
    <main className="overflow-x-hidden relative">
      <Suspense fallback={<div className="text-center p-4">Đang tải...</div>}>
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
        <BackToTop />

      </Suspense>
    </main>
  );
};

export default App;
