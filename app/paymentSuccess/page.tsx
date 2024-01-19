import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import SuccessButton from "../components/SuccessButton";
import { getServerSession } from "next-auth";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const page = async () => {
  const session = await getServerSession();

  return (
    <main
      className={`${poppins.className} flex flex-col items-center justify-center w-screen h-screen`}
    >
      <div className=" mb-8 flex items-center justify-center bg-slate-40 w-max relative">
        <div className=" w-28 h-28 border-2 border-[#eec800] rounded-full"></div>
        <Image
          src={"/icon.gif"}
          alt=""
          width={100}
          height={100}
          priority
          className="absolute w-16"
        />
      </div>
      <div className=" text-center mb-8">
        <h1 className="">Your Payment Is Successfull</h1>
        <p className=" text-xs font-light w-72 md:w-auto md:text-sm">
          Thank you for your payment. Continue to see the payment detail and
          receipt
        </p>
      </div>
      <SuccessButton session={session} />
    </main>
  );
};

export default page;
