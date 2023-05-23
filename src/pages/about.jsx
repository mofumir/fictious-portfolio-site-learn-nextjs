import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Mofumir | About Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="This is JUST A TEXT!"
            className="mb-16 mlg:!text-7xl msm:!text-6xl mxs:!text-4xl msm:mb-8"
          />
          <div className="grid grid-cols-8 gap-16 msm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start mxl:col-span-4 mmd:order-2 mmd:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m mofumir, this entire paragraph is just a filler
                text. The picture is definitely not mine, it&apos;s midjourney
                thing.
              </p>
              <p className="my-4 font-medium">This is 2nd filler text.</p>
              <p className="my-4 font-medium">
                I might make my own portfolio site one day.
              </p>
            </div>
            <div className="col-span-3 max-w-[100%] relative h-max rounded-2xl border-solid border-dark border-2 bg-light p-8 dark:bg-dark dark:border-light mxl:col-span-4 mmd:order-1 mmd:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Mofumir"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between mxl:col-span-8 mxl:flex-row mxl:items-center mmd:order-3">
              <div className="flex flex-col items-end justify-center mxl:items-center">
                <span className="inline-block text-7xl mmd:text-6xl msm:text-5xl mxs:text-4xl font-bold">
                  <AnimatedNumbers value={100} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75 text-right mxl:text-center mmd:text-lg msm:text-base mxs:text-sm dark:text-light/75">
                  days spent on being unemployed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center mxl:items-center">
                <span className="inline-block text-7xl  mmd:text-6xl msm:text-5xl mxs:text-4xl font-bold">
                  <AnimatedNumbers value={1337} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75 text-right mxl:text-center mmd:text-lg msm:text-base mxs:text-sm  dark:text-light/75">
                  hours spent on being fool
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center mxl:items-center">
                <span className="inline-block text-7xl mmd:text-6xl msm:text-5xl mxs:text-4xl font-bold">
                  <AnimatedNumbers value={4323} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75 text-right mxl:text-center mmd:text-lg msm:text-base mxs:text-sm dark:text-light/75">
                  hours procrastinated
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
