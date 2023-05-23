import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

// TODO: make this rely on contentful
const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl msm:text-xl mxs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target={"_blank"} className="text-primary">
            @{company}
          </a>
        </h3>
        <span className="captalize font-medium text-dark/75　mxs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-64 mlg:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full mlg:text-7xl msm:text-6xl mxs:text-4xl mmd:mb-16 text-center">
        Experience
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
            position="Web コーダー"
            company="(架空)イマジナリーカンパニー"
            companyLink="https://imaginarycompany.co.jp/"
            time="2021-現在まで"
            address="東京都"
            work=""
          />
          <Details
            position="Web コーダー"
            company="(架空)イマジナリーカンパニー"
            companyLink="https://imaginarycompany.co.jp/"
            time="2021-現在まで"
            address="東京都"
            work=""
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
