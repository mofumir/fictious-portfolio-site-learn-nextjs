import React from "react";
import { motion } from "framer-motion";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light cursor-pointer py-3 px-6 absolute shadow-dark dark:bg-light dark:text-dark mlg:py-2 mlg:px-4 mmd:text-sm mmd:py-1.5 mmd:px-3 "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
      {/* todo: consider thinking about other form of showing off skills cuz i don't think this one is my style */}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mlg:text-7xl mmd:mt-32 msm:text-6xl mxs:text-4xl">
        Skills
      </h2>
      <div className="w-full h-screen  relative flex items-center justify-center rounded-full bg-circularLight mmd:hidden">
        <Skill name="Web" x="0vw" y="0vw" />
        <Skill name="HTML" x="0vw" y="10vw" />
        <Skill name="CSS" x="-10vw" y="10vw" />
        <Skill name="TailwindCSS" x="-10vw" y="15vw" />
        <Skill name="JavaScript" x="10vw" y="10vw" />
        <Skill name="ReactJS" x="10vw" y="15vw" />
        <Skill name="VueJS" x="10vw" y="20vw" />
        <Skill name="PHP" x="-10vw" y="0vw" />
        <Skill name="Wordpress" x="-20vw" y="0vw" />
        <Skill name="Adobe Illustrator" x="15vw" y="5vw" />
        <Skill name="Adobe Photoshop" x="15vw" y="0vw" />
        <Skill name="Clip Studio Paint" x="15vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-10vw" />
      </div>

      <div className="w-full h-screen mxs:h-[40vh] relative items-center justify-center rounded-full bg-circularLight hidden mmd:flex">
        <Skill name="Web" x="0vw" y="-20vw" />
        <Skill name="HTML" x="0vw" y="-10vw" />
        <Skill name="CSS" x="0vw" y="-10vw" />
        <Skill name="TailwindCSS" x="25vw" y="-10vw" />
        <Skill name="JavaScript" x="0vw" y="0vw" />
        <Skill name="ReactJS" x="25vw" y="0vw" />
        <Skill name="VueJS" x="-25vw" y="0vw" />
        <Skill name="PHP" x="0vw" y="10vw" />
        <Skill name="Wordpress" x="-25vw" y="10vw" />
        <Skill name="Adobe Illustrator" x="-25vw" y="20vw" />
        <Skill name="Adobe Photoshop" x="25vw" y="20vw" />
        <Skill name="Clip Studio Paint" x="-25vw" y="30vw" />
        <Skill name="Figma" x="15vw" y="30vw" />
      </div>
    </>
  );
};

export default Skills;
