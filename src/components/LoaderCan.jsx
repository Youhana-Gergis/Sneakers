import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Example = () => {
  return (
    <Html as='div' centerstyle={{display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
      <span className='canvas-loader'></span>
      <p style={{fontSize: 14,color: "#F1F1F1",fontWeight: 800,marginTop: 40,}}>{<BarLoader/>}</p>
    </Html>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

export default Example;