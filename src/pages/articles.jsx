import Head from "next/head";
import React, { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/smooth scrolling in reactjs.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const MovingImage = ({ title, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitialize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        style={{ x: x, y: y }}
        className="z-10 w-96 h-auto hidden absolute rounded"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl group">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <article>
        <Link
          href={link}
          target="_blank"
          className="inline-block w-full cursor-pointer overflow-hidden rounded-lg mmd:!hidden"
        >
          <FramerImage
            src={img}
            alt={title}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="w-full h-auto mxs:text-lg  "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <Link
          href={link}
          target="_blank"
          className="group-hover:underline underline-offset-2"
        >
          <h2 className="capitalize text-2xl font-bold my-2 mt-4">{title}</h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </article>
    </li>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light msm:flex-col">
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 msm:self-start msm:pl-0 mxs:text-sm">
        {date}
      </span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Mofumir | Articles Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="This is JUST A TEXT!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16 mmd:grid-cols-1 mlg:gap-8 mmd:gap-y-16">
            <FeaturedArticle
              title="How to make filler articles"
              summary="Since I don't exactly have an actual article, i'm just going to say I kinda hated going through tailwindcss. It's probably good for making app than website dedicated to show your portfolio. Not to mention that weird bug with media query setting."
              time="as long as your lifetime"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="How to make filler articles"
              summary="Ever wonder why rest of site is in English? It's not because original video is in english, but because I can't think of clever words with japanese. Gotta learn on that when i'm going to actually make my own."
              time="as long as your lifetime"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="The examples of filler articles"
              date="2023/05/14"
              img={article1}
              link="/"
            />
            <Article
              title="The examples of filler articles"
              date="2023/05/14"
              img={article1}
              link="/"
            />
            <Article
              title="The examples of filler articles"
              date="2023/05/14"
              img={article1}
              link="/"
            />
            <Article
              title="The examples of filler articles"
              date="2023/05/14"
              img={article1}
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
