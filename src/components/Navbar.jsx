import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import {
  TwitterIcon,
  GithubIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 text-dark
        group-hover:w-full transition-[width] ease duration-300 
        dark:bg-light
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      onClick={handleClick}
      className={`${className} relative group my-2 first:mt-0`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 text-dark
        group-hover:w-full transition-[width] ease duration-300  dark:bg-dark
        
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-8 font-medium flex items-center justify-between dark:text-light px-32 relative z-10 msm:px-8 mlg:px-16 mmd:px-12">
      <button
        className="flex-col justify-center items-center hidden mlg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
          l
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"} 
          `}
        />
      </button>

      {/* // mobile nav */}
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className={`w-full flex flex-col justify-between items-center min-w-[70vw] fixed top-1/2 left-1/2 bg-dark/90 dark:bg-light/75 text-light dark:text-dark rounded-lg backdrop-blur-md py-32 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300`}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mr-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="mr-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mr-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className="mr-4"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="/"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            >
              <PinterestIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="w-full flex justify-between items-center mlg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/articles" title="Articles" className="mr-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="/"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <PinterestIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] mlg:relative mlg:left-0 mlg:top-0 mlg:translate-x-0">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
