import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:border-light border border-solid border-transparent"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(220,0,0,100)",
            "rgba(0,220,0,100)",
            "rgba(0,0,220,100)",
            "rgba(220,220,220,100)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        KM
      </MotionLink>
    </div>
  );
};

export default Logo;
