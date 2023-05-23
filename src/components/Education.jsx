import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

// TODO: make this rely on contentful
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mot-0 last:mb-0 flex flex-col mx-auto items-center justify-between mmd:w-[80%] first:mt-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="captalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-64 mlg:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full mlg:!text-7xl msm:!text-6xl mxs:!text-4xl text-center">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative mlg:w-[90%] mmd:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light mmd:w-[2px] mmd:left-[30px] mxs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="就労移行支援"
            time="2021-2023"
            place="atGPジョブトレIT・Web船橋"
            info="Webデザインと自身の障害対処を学び、就労に向けて準備をしています。"
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
