"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.7,
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
const cardVariant2: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.7,
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

const page = () => {
  return (
    <main className=" overflow-x-hidden items-center snap-y snap-mandatory overflow-y-scroll h-screen w-screen text-center">
      <section className=" relative snap-start w-full h-full  flex items-center justify-center">
        <Image
          priority
          src={"/gallery/bg1.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full h-full object-cover absolute brightness-50"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-20 h-20 bg-red-500 absolute mb-[500px] lg:w-32 lg:h-32 lg:mr-[10%] lg:mb-[450px]">
            <Image
              src={"/gallery/g1-01.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute mr-96 mb-[150px] lg:w-32 lg:h-24 lg:mr-[60%] lg:mb-[200px]">
            <Image
              src={"/gallery/g1-05.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute ml-40 mt-[450px] lg:w-32 lg:h-24 lg:ml-[60%] lg:mt-[250px]">
            <Image
              src={"/gallery/g1-03.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariant2}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-32 h-24 bg-red-500 absolute ml-60 mb-[250px] lg:w-48 lg:h-36 lg:ml-[40%] lg:mb-[350px]">
            <Image
              src={"/gallery/g1-04.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-28 h-24 bg-red-500 absolute mr-40 mt-[250px] lg:w-52 lg:h-40 lg:mr-[20%] lg:mt-[450px]">
            <Image
              src={"/gallery/g1-02.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <h1 className=" text-4xl md:text-6xl z-30">ROOFTOP DINING</h1>
      </section>
      <section className="relative snap-start w-full h-full bg-slate-300 flex items-center justify-center">
        <Image
          priority
          src={"/gallery/bg2.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full h-full object-cover absolute brightness-50"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-20 h-20 bg-red-500 absolute mb-[500px] lg:w-32 lg:h-32 lg:mr-[10%] lg:mb-[450px]">
            <Image
              src={"/gallery/g2-01.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute mr-96 mb-[150px] lg:w-32 lg:h-24 lg:mr-[60%] lg:mb-[200px]">
            <Image
              src={"/gallery/g2-02.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute ml-40 mt-[450px] lg:w-32 lg:h-24 lg:ml-[60%] lg:mt-[250px]">
            <Image
              src={"/gallery/g2-03.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariant2}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-32 h-24 bg-red-500 absolute ml-60 mb-[250px] lg:w-48 lg:h-36 lg:ml-[40%] lg:mb-[350px]">
            <Image
              src={"/gallery/g2-04.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-28 h-24 bg-red-500 absolute mr-40 mt-[250px] lg:w-52 lg:h-40 lg:mr-[20%] lg:mt-[450px]">
            <Image
              src={"/gallery/g2-05.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <h1 className=" text-4xl md:text-6xl z-30">PRIVATE DINING ROOM</h1>
      </section>
      <section className="relative snap-start w-full h-full bg-slate-100 flex items-center justify-center">
        <Image
          priority
          src={"/gallery/bg3.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full h-full object-cover absolute brightness-50"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-20 h-20 bg-red-500 absolute mb-[500px] lg:w-32 lg:h-32 lg:mr-[10%] lg:mb-[450px]">
            <Image
              src={"/gallery/g3-01.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute mr-96 mb-[150px] lg:w-32 lg:h-24 lg:mr-[60%] lg:mb-[200px]">
            <Image
              src={"/gallery/g3-02.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute ml-40 mt-[450px] lg:w-32 lg:h-24 lg:ml-[60%] lg:mt-[250px]">
            <Image
              src={"/gallery/g3-03.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariant2}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-32 h-24 bg-red-500 absolute ml-60 mb-[250px] lg:w-48 lg:h-36 lg:ml-[40%] lg:mb-[350px]">
            <Image
              src={"/gallery/g3-04.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-28 h-24 bg-red-500 absolute mr-40 mt-[250px] lg:w-52 lg:h-40 lg:mr-[20%] lg:mt-[450px]">
            <Image
              src={"/gallery/g3-05.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <h1 className=" text-4xl md:text-6xl z-30">GARDEN TERRACE</h1>
      </section>
      <section className="relative snap-start w-full h-full bg-slate-700 flex items-center justify-center">
        <Image
          priority
          src={"/gallery/bg4.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full h-full object-cover absolute brightness-50"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-20 h-20 bg-red-500 absolute mb-[500px] lg:w-32 lg:h-32 lg:mr-[10%] lg:mb-[450px]">
            <Image
              src={"/gallery/g4-01.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute mr-96 mb-[150px] lg:w-32 lg:h-24 lg:mr-[60%] lg:mb-[200px]">
            <Image
              src={"/gallery/g4-02.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-20 h-16 bg-red-500 absolute ml-40 mt-[450px] lg:w-32 lg:h-24 lg:ml-[60%] lg:mt-[250px]">
            <Image
              src={"/gallery/g4-03.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariant2}
          className="absolute w-screen h-screen flex items-center justify-center"
        >
          <div className=" w-32 h-24 bg-red-500 absolute ml-60 mb-[250px] lg:w-48 lg:h-36 lg:ml-[40%] lg:mb-[350px]">
            <Image
              src={"/gallery/g4-04.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" w-28 h-24 bg-red-500 absolute mr-40 mt-[250px] lg:w-52 lg:h-40 lg:mr-[20%] lg:mt-[450px]">
            <Image
              src={"/gallery/g4-05.webp"}
              alt=""
              width={200}
              height={200}
              className=" w-full h-full object-cover "
            />
          </div>
        </motion.div>
        <h1 className=" text-4xl md:text-6xl z-30">
          SUNSET COCKTAILS AND TAPAS
        </h1>
      </section>
    </main>
  );
};

export default page;
