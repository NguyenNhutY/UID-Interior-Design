import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link từ react-scroll

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "about", // Cập nhật để sử dụng ID section
  },
  {
    id: 2,
    title: "Services",
    link: "services", // Cập nhật để sử dụng ID section
  },
  {
    id: 3,
    title: "Project",
    link: "project2", // Cập nhật để sử dụng ID section
  },
  {
    id: 4,
    title: "Contact",
    link: "contact", // Cập nhật để sử dụng ID section
  },
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-6 flex justify-between items-center"
    >
      {/* Logo section */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold">Uyen Nguyen</span>
      </div>
      {/* Link section */}
      <div className="hidden md:block !space-x-12">
        {NavLinks.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.link} // Sử dụng link từ NavLinks
              smooth={true} // Cuộn mượt
              duration={500} // Thời gian cuộn
              offset={-50} // Điều chỉnh khoảng cách khi scroll
              className="inline-block mx-4 text-lg font-semibold cursor-pointer" // Thêm cursor-pointer
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* Button section */}
    </motion.div>
  );
};

export default Navbar;
