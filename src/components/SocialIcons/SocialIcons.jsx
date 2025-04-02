import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import các biểu tượng từ react-icons
import { SiZalo } from "react-icons/si"; // Nếu không có biểu tượng Zalo, bạn có thể sử dụng icon Zalo từ Font Awesome hoặc tạo một icon tùy chỉnh.

const SocialIcons = () => {
  return (
    <div className="fixed right-5 bottom-50 transform -translate-y-1/2 space-y-4">
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 transition-colors"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://zalo.me/yourzalonumber" // Thay đổi thành số Zalo của bạn
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors"
      >
        <SiZalo size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
