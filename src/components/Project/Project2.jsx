import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import Slider from "react-slick";

import imgprojet1 from "../../assets/project2/462679186_2477326479134142_2246618343578267677_n.jpg";
import imgprojet2 from "../../assets/project2/462415470_2477326462467477_174511307161517780_n.jpg";
import imgprojet3 from "../../assets/project2/462458525_2477326465800810_2235566946794162219_n.jpg";
import imgprojet4 from "../../assets/project2/462365217_2477326475800809_5775577765042141069_n.jpg";
import imgprojet5 from "../../assets/project2/462606589_2477326459134144_1943642402092962459_n.jpg";
import imgprojet6 from "../../assets/project2/462512256_2477326552467468_8735306184784400992_n.jpg";
import imgprojet7 from "../../assets/project2/462625011_2477326575800799_1959750431426774687_n.jpg";
import imgprojet8 from "../../assets/project2/462351883_2477326562467467_8882423441935771843_n.jpg";
import imgprojet9 from "../../assets/project2/462494932_2477326569134133_7990855895058129335_n.jpg";
import imgprojet10 from "../../assets/project2/462603195_2477326559134134_1048187757567660942_n.jpg";
import imgprojet11 from "../../assets/project2/462494630_2477326555800801_364515059687719925_n.jpg";
import imgprojet12 from "../../assets/project2/462616814_2477326455800811_7198335278601257519_n.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const projects = [
  { id: 1, image: imgprojet1 },
  { id: 2, image: imgprojet2 },
  { id: 3, image: imgprojet3 },
  { id: 4, image: imgprojet4 },
  { id: 5, image: imgprojet5 },
  { id: 6, image: imgprojet6 },
  { id: 7, image: imgprojet7 },
  { id: 8, image: imgprojet8 },
  { id: 9, image: imgprojet9 },
  { id: 10, image: imgprojet10 },
  { id: 11, image: imgprojet11 },
  { id: 12, image: imgprojet12 },
];

const InteriorProjects = ({id}) => {
  return (
<div id ={id} className="container mx-auto p-6 ">
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
        className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
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
