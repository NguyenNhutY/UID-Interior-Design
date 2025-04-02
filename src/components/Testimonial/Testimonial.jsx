import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import customer1 from "../../assets/customer/472426650_9197404240317529_2205197251411876424_n.jpg"
import customer2 from "../../assets/customer/486618367_9364092183638634_3444789750311111940_n.jpg"
import customer3 from "../../assets/customer/486618367_9364092183638634_3444789750311111940_n.jpg"

const TestimonialData = [
  {
    id: 1,
    name: "Tran Ngo Lan Vy",
    designation: "Designer",
    img: customer1,
    text: "Stunning and professional! The design exudes elegance with its meticulous attention to detail, creating a harmonious blend of aesthetics and functionality.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Bach Thanh Tra",
    designation: "Designer",
    img:customer2,
    text: "Woa! The S Tea House is sure to reach out soon! With such a sleek and professional design, every detail speaks of sophistication and creativity. The seamless blend of elegance and functionality makes it a standout masterpiece, leaving a lasting impression. ✨☕.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "My Hang",
    designation: "Manager",
    img: customer3,
    text: "Congratulations! It looks absolutely stunning and so refined. Hope everything is going well—take care and stay strong! ❤️✨",
    delay: 0.6,
  },
  
];
const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      {/* tesitomonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
