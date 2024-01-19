import React from "react";
import { Poppins } from "next/font/google";
import Footer from "../components/Footer";
import Image from "next/image";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mt-28 md:mt-[200px] px-10 pb-14  overflow-x-hidden">
      <section className="relative flex justify-center items-center text-5xl md:text-6xl lg:text-7xl h-[500px]">
        <h1 className=" text-center z-20 max-w-3xl leading-[60px]">
          ESTABLISHED IN MCMXXXVII
        </h1>
        <div className=" bg-slate-600 w-44 h-80 md:w-64 md:h-[500px]  absolute">
          <Image
            src={"/about/since.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-full h-full object-cover"
          />
        </div>
      </section>
      <section className=" mb-40 md:m-60 lg:flex items-center lg:space-x-8 xl:space-x-12">
        <div className=" w-56 h-72 md:w-80 md:h-[450px] xl:w-80 xl:h-[400px] bg-slate-600 mb-5">
          <Image
            src={"/about/branch.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className=" text-[40px] md:text-[50px]  leading-[38px]  md:leading-[50px]  mb-4 w-[300px] md:w-[560px]">
            13+ BRANCH ALL OVER THE WORLD
          </h1>
          <div className=" w-[300px] md:w-[560px] h-[1px] bg-[#EEC800] mb-4"></div>
          <p
            className={`${poppins.className} text-sm md:text-base font-ligh text-[#868e2d] text-justif w-[300px]  md:w-[560px] leading-none md:leading-[20px]`}
          >
            Boasting a global presence, our culinary legacy extends across
            continents, offering a harmonious fusion of diverse flavors and
            refined dining experiences at our various establishments worldwide.
            Each branch seamlessly encapsulates our commitment to excellence,
            ensuring a consistent standard of unparalleled hospitality and
            gastronomic delight.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center space-y-14 mb-40 xl:mb-60">
        <h1 className="w-max text-center text-4xl  border-b-2 border-[#EEC800]">
          AWARD
        </h1>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-2">
          <div className="flex flex-col items-center space-y-3">
            <div className="  w-[135px] h-40 md:w-[170px] md:h-52  ">
              <Image
                src={"/about/award1.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover rounded-t-full"
              />
            </div>
            <h3 className=" w-44 md:w-[190px] lg:w-[250px]  text-center leading-none text-lg md:text-xl ">
              MICHELIN STARS
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="  w-[135px] h-40 md:w-[170px] md:h-52  ">
              <Image
                src={"/about/award2.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover rounded-t-full"
              />
            </div>
            <h3 className=" w-44 md:w-[190px] lg:w-[250px]  text-center leading-none text-lg md:text-xl ">
              WORLD&apos;S 50 BEST RESTAURANT
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="  w-[135px] h-40 md:w-[170px] md:h-52  ">
              <Image
                src={"/about/award3.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover rounded-t-full"
              />
            </div>
            <h3 className=" w-44 md:w-[190px] lg:w-[250px]  text-center leading-none text-lg md:text-xl ">
              JAMES BEARD AWARD
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="  w-[135px] h-40 md:w-[170px] md:h-52  ">
              <Image
                src={"/about/award4.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover rounded-t-full"
              />
            </div>
            <h3 className=" w-44 md:w-[190px] lg:w-[250px]  text-center leading-none text-lg md:text-xl ">
              ZAGAT RATINGS
            </h3>
          </div>
        </div>
      </section>
      <footer className=" bg-slate-20 w-full md:w-[80%] ">
        <Footer />
      </footer>
    </main>
  );
};

export default page;
