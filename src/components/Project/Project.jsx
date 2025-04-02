import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

import imgprojet1 from "../../assets/461078752_2463817200485070_6279616821226772438_n.jpg";
import imgprojet2 from "../../assets/461250045_2463817077151749_5275205479436145512_n.jpg";
import imgprojet3 from "../../assets/461389831_2463817080485082_2442700409013663798_n.jpg";

const projects = [
  { id: 1, image: imgprojet1 },
  { id: 2, image: imgprojet2 },
  { id: 3, image: imgprojet3 },
];

const InteriorProjects = () => {
  return (
    <div className="container mx-auto p-6 ">
  <motion.div variants={SlideLeft(0.2)} initial="initial" whileInView="animate" viewport={{ once: true }}>
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
      📐 The S Tea House – Interior Design
    </h2>
  </motion.div>
  
  <div className="space-y-8">
    {projects.map((project, index) => (
      <motion.div
        key={project.id}
        variants={SlideLeft(index * 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105"
      >
        <img
          src={project.image}
          alt={`Thiết kế nội thất The S Tea House - Hình ${project.id}`}
          title={`Dự án The S Tea House - Nội thất ${project.id}`}
          className="w-full h-auto object-cover max-h-[600px] rounded-lg"
        />
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default InteriorProjects;
