import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import LoginButton from "../components/LoginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-[700px] h-[85vh] relative">
      <main className="mt-28 md:mt-[150px] flex flex-col items-center">
        <div className=" h-52 max-h-[140px] flex flex-col items-center relative mb-5">
          <div className="flex items-center absolute -top-1">
            <div className="w-2 h-2 border border-[#837634] rounded-full"></div>
            <div className="w-2 h-[1px] bg-[#837634]"></div>
            <div className="w-2 h-2 border border-[#837634] rounded-full"></div>
          </div>
          <div className=" flex-1  w-[1px] bg-[#837634]"></div>
        </div>
        {session && (
          <>
            <div className="relative w-36 h-36 md:w-48 md:h-48  bg-slate-500 rounded-full mb-5">
              <Image
                src={session?.user?.image!}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
            <h4 className=" text-[44px] w-60 md:w-[500px] lg:w-max bg-slate-10  leading-[38px] mb-10 md:mb-5 max-w-4xl text-center lg:leading-[30px]">
              {session?.user?.name}
            </h4>
            <p
              className={`${poppins.className} text-[#b3ac33] w-72 lg:w-[500px] text-center mb-14 text-sm lg:text-lgbase lg:font-light max-w-lg `}
            >
              Offers a refined gastronomic haven, where exquisite cuisine meets
              tranquil ambiance, creating an unforgettable dining experience.
            </p>
          </>
        )}
        <LoginButton />
      </main>
      <footer className=" w-full flex flex-col items-center absolute bottom-10">
        <div className="flex justify-center space-x-2 lg:space-x-4 items-center mb-2">
          <a href="">
            <Image
              src={"/socialMedia/gmail.svg"}
              alt=""
              width={100}
              height={100}
              className="w-8 h-8 "
            />
          </a>
          <a href="">
            <Image
              src={"/socialMedia/whatsapp.svg"}
              alt=""
              width={100}
              height={100}
              className="w-7 h-7 "
            />
          </a>
          <a href="">
            <Image
              src={"/socialMedia/instagram.svg"}
              alt=""
              width={100}
              height={100}
              className="w-7 h-7 "
            />
          </a>
          <a href="">
            <Image
              src={"/socialMedia/youtube.svg"}
              alt=""
              width={100}
              height={100}
              className="w-8 h-8 "
            />
          </a>
        </div>
        <span
          className={`${poppins.className} text-center w-full text-sm  font-light`}
        >
          © 2023 · Serenity Dining Co. LLC
        </span>
      </footer>
    </div>
  );
};

export default page;
