import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

// TODO: add japanese font
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen mlg:min-h-fit dark:text-light">
        <Layout className="pt-0 mmd:pt-16 msm:pt-8">
          <div className="flex items-center justify-between w-full mlg:flex-col">
            <div className="w-1/2">
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={profilePic}
                alt="Mofumir"
                className="w-full h-auto mlg:hidden mmd:inline-block mmd:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col mlg:items-center self-center mlg:w-full mlg:text-center mlg:mb-16">
              <AnimatedText
                text="5000 Kilowatts of power at your fingertips"
                className="!text-6xl !text-left mxl:!text-5xl mlg:!text-center mlg:!text-6xl mmd:!text-5xl msm:!text-3xl"
              />
              {/* todo: add anim to paragraph */}
              <p className="my-4 text-base font-medium mmd:text-sm msm:text-xs">
                This site is just an experimental site to learn next.js and and
                not representive of my skills.
              </p>
              <div className="flex items-center self-start mt-2 mlg:self-center mlg:m/t-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark border-2 border-solid border-transparent hover:border-dark duration-200 mmd:px-4 mmd:text-base"
                  download={true}
                >
                  button <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light mmd:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
