import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import project1 from "../../public/images/projects/portfolio-cover-image.jpg";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const hoverLineStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left 3.2em",
  transition: "background-size 0.25s ease-in-out",
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div className="col-span-12">
      <article className=" w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 group dark:bg-dark dark:text-light dark:border-light mlg:flex-col mlg:p-8 mxs:rounded-br-3xl mxs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-white mxs:-right-2 mxs:h-[102%] mxs:w-full mxs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg  mlg:w-full "
        >
          <FramerImage
            src={img}
            alt={title}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 mlg:w-full mlg:pl-0 mlg:pt-6">
          <span className="text-primary font-medium text-xl mxs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            style={hoverLineStyle}
            className="bg-[length:0%_0.2em] group-hover:bg-[length:100%_0.2em] bg-gradient-to-r from-black to-black dark:from-white dark:to-white"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold msm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium msm:text-sm">{summary}</p>
          <div className=" mt-2 flex items-center ">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark msm:px-4 msm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <div className="col-span-6 msm:col-span-12p">
      {" "}
      <article className="w-full flex flex-col items-center relative justify-between rounded-3xl border border-solid border-dark bg-light group shadow-2xl p-12 dark:border-light dark:bg-dark mxs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light mmd:-right-2 mmd:w-[101%] mxs:h-[102%] mxs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl mlg:text-lg mmd:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            style={hoverLineStyle}
            className="bg-[length:0%_0.4em] group-hover:bg-[length:100%_0.4em] bg-gradient-to-r from-black to-black dark:from-white dark:to-white"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold mlg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className=" mt-2 flex items-center justify-between w-full">
            <Link
              href={github}
              target="_blank"
              className="text-lg font-semibold underline mmd:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 mmd:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mofumir | Projects Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-4 text-center"
            text="My projects page!!!"
          />

          <div className="grid grid-cols-12 mt-16 gap-24 gap-y-32 mxl:gap-x-16 mlg:gap-x-8 mmd:gap-y-24 msm:gap-x-0 ">
            <FeaturedProject
              type="Featured Project"
              title="This portfolio site"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />
            <Project
              type="None"
              title="Filler Project"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />
            <Project
              type="None"
              title="Filler Project"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />
            <FeaturedProject
              type="Featured Project"
              title="This portfolio site"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />

            <Project
              type="None"
              title="Filler Project"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />
            <Project
              type="None"
              title="Filler Project"
              img={project1}
              summary="Portfolio site, replicated and modified by mofumir. 
          original by codebucks (youtube link in footer)"
              link="/"
              github="/"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
