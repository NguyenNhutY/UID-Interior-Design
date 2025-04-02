import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FaFacebook, FaInstagram, } from "react-icons/fa"; // Import các biểu tượng mạng xã hội
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Logo" className="w-6" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p>Phan Thiet, Binh Thuan, VN</p>
            <p>&copy; 2024 TCJ All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#our-story">Our Story</a>
                </li>
                <li>
                  <a href="#designer">Designer</a>
                </li>
                <li>
                  <a href="#craftmanship">Craftsmanship</a>
                </li>
                <li>
                  <a href="#sustainability">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#faqs">FAQ's</a>
                </li>
                <li>
                  <a href="#shipping-returns">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#care-guide">Care Guide</a>
                </li>
                <li>
                  <a href="#guaranty">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:+91123456789">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact.thecodingjourney@gmail.com">contact.thecodingjourney@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaFacebook />
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram />
                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>

            </ul>
          </div>
        </div>

        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &copy; {new Date().getFullYear()} TCJ. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
