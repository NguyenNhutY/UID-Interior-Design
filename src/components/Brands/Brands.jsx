import React from "react";

import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";


import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">

          <motion.img
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView={"animate"}
            src={Brand2}
            alt="brand"
      className="w-[88px] md:w-[142px] "
          />
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={Brand3}
            alt="brand"
 className="w-[88px] md:w-[142px] "
          />


        </div>
      </div>
    </>
  );
};

export default Brands;
