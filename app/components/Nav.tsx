"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Grand_Hotel } from "next/font/google";
import { motion } from "framer-motion";

const grandHotel = Grand_Hotel({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const sidebar = {
  open: (height = 1200) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navContainer = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-center  bg-slate-70 fixed top-14 md:top-20 w-full px-10 z-50">
      <Link
        href={"/profile"}
        className="hidden md:block text-2xl link w-20 mr-5"
      >
        PROFILE
      </Link>
      <div className=" w-[35%] flex items-center relative max-w-sm">
        <div className=" w-3 h-3 border-b border-l border-[#587221] absolute left-[0.5px] rotate-45"></div>
        <div className=" w-[10px] h-[1px] bg-[#587221]"></div>
        <div className=" w-[11px] h-[11px] rounded-full border-[1px] border-[#587221]"></div>
        <div className=" w-[5px] h-[1px] bg-[#587221]"></div>
        <div className=" w-[14px] h-[14px] rounded-full border-[1px] border-[#587221]"></div>
        <div className=" flex-1 h-[1px] bg-[#587221]"></div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className=" text-2xl mx-3 md:hidden "
      >
        MENU
      </button>
      <Link
        href={"/"}
        className={`${grandHotel.className} mx-5  text-center w-48 text-2xl xl:text-3xl hidden md:block hover:text-[#837634] duration-300 ease-in-out`}
      >
        Serenity Dining Co.
      </Link>
      <div className=" w-[35%] flex items-center justify-end relative max-w-sm">
        <div className=" flex-1 h-[1px] bg-[#587221]"></div>
        <div className=" w-[14px] h-[14px] rounded-full border-[1px] border-[#587221]"></div>
        <div className=" w-[5px] h-[1px] bg-[#587221]"></div>
        <div className=" w-[11px] h-[11px] rounded-full border-[1px] border-[#587221]"></div>
        <div className=" w-[10px] h-[1px] bg-[#587221]"></div>
        <div className=" w-3 h-3 border-t border-r border-[#587221] absolute rotate-45 right-[0.5px]"></div>
      </div>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div
          className="fixed top-0 h-screen left-0 w-screen bg-[#2C1E35] z-10"
          variants={sidebar}
        >
          <motion.ul
            variants={navContainer}
            className="w-full h-full flex flex-col items-center justify-center text-4xl space-y-5"
          >
            <motion.li
              onClick={() => setIsOpen(false)}
              variants={navItem}
              className=" absolute text-4xl left-10 md:left-20 top-10 md:text-5xl hover:text-[#776403] duration-300 ease-in-out "
            >
              x
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out md:hidden"
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/profile"}>PROFILE</Link>
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out "
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/"}>HOME</Link>
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out "
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/about"}>ABOUT</Link>
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out "
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/gallery"}>GALLERY</Link>
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out "
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/menu"}>MENU</Link>
            </motion.li>
            <motion.li
              className="hover:text-[#776403] duration-300 ease-in-out "
              onClick={() => setIsOpen(false)}
              variants={navItem}
            >
              <Link href={"/cart"}>CART</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <button
          onClick={() => setIsOpen(true)}
          className="hidden md:block text-2xl link ease-in-out w-20 ml-5 z-40"
        >
          MENU
        </button>
      </motion.nav>
    </header>
  );
};

export default Nav;
