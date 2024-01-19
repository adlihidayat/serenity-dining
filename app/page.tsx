import Image from "next/image";
import { Grand_Hotel, Poppins } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Nav from "./components/Nav";

const grandHotel = Grand_Hotel({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center mt-28 md:mt-[150px] px-10 pb-14 xl:pb-28 overflow-x-hidden">
        <section className="flex flex-col items-center text-center mb-40 ">
          <div className=" h-52 max-h-[170px] flex flex-col items-center relative mb-5 lg:mb-10">
            <div className="flex items-center absolute -top-1">
              <div className="w-2 h-2 border border-[#837634] rounded-full"></div>
              <div className="w-2 h-[1px] bg-[#837634]"></div>
              <div className="w-2 h-2 border border-[#837634] rounded-full"></div>
            </div>
            <div className=" flex-1  w-[1px] bg-[#837634]"></div>
          </div>
          <span
            className={`${grandHotel.className} text-center w-[150px] text-2xl md:hidden mb-2`}
          >
            Serenity Dining Co.
          </span>
          <h4 className=" text-[54px] lg:text-[85px] leading-[45px] mb-10 lg:mb-5 max-w-4xl text-center lg:leading-[70px]">
            ELEGANT CULINARY EXPERIENCE
          </h4>
          <p
            className={`${poppins.className} text-[#928C0D] mb-24 lg:mb-14 text-sm lg:font-light max-w-lg`}
          >
            Offers a refined gastronomic haven, where exquisite cuisine meets
            tranquil ambiance, creating an unforgettable dining experience.
          </p>
          <Link
            href={"/menu"}
            className={`${poppins.className} border-[1.5px] px-5 py-2 button text-sm`}
          >
            ORDER NOW
          </Link>
        </section>
        <section className=" relative w-full flex justify-center mb-40">
          <div className="absolute mr-44 md:top-10 lg:top-36 md:mr-72 lg:mr-[400px]">
            <h1 className="text-[38px] md:text-5xl lg:text-6xl w-max leading-none">
              ABOUT US
            </h1>
            <p
              className={`${poppins.className} text-sm text-justify font-thin text-[#A89707] w-[160px] md:w-[200px] lg:w-[250px] mb-3`}
            >
              Established in 1985, Serenity Dining Co. has been a cherished
              culinary destination, captivating the hearts of patrons with its
              timeless elegance and exceptional cuisine.
            </p>
            <Link
              href={"/about"}
              className={`${poppins.className} border-[1px] px-4 py-[6px] text-xs button`}
            >
              VIEW MORE
            </Link>
          </div>
          <div className=" w-40 h-64 md:w-64 md:h-96 lg:w-[330px] lg:h-[520px] bg-slate-800 rounded-full">
            <Image
              src={"/home/about.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-full h-[102%] md:h-[107%] lg:h-[102%] object-cover"
            />
          </div>
          <span className=" absolute text-[38px] md:text-5xl lg:text-7xl w-max leading-none bottom-0 md:bottom-10 lg:bottom-36 ml-44 md:ml-72 lg:ml-[400px]">
            SINCE 1987
          </span>
        </section>
        <section className=" relative w-full flex flex-col items-end lg:px-20 mb-52 lg:mb-72">
          <div className=" h-max w-full flex lg:px-[5%] items-center mb-10">
            <div className="w-2 h-2 border border-[#EEC800] rotate-45 mr-1"></div>
            <div className="w-3 h-3 border border-[#EEC800] rotate-45"></div>
            <div className="flex-1 h-[1px] bg-[#EEC800]"></div>
          </div>
          <Link
            href={"/menu"}
            className="flex flex-col items-end mb-20 lg:mr-[5%] link"
          >
            <h1 className="text-[38px] md:text-5xl lg:text-6xl leading-none w-44 md:w-60 lg:w-80 text-right">
              CULINARY ENSAMBLE
            </h1>
            <div
              className={`${poppins.className} text-sm flex items-center space-x-1 `}
            >
              <span>CHECK ALL THE MENU</span>
              <Image
                src={"arrow.svg"}
                alt=""
                width={100}
                height={100}
                className="w-5"
              />
            </div>
          </Link>
          <div className="w-full flex flex-col items-center">
            <div className="flex w-full max-w-5xl justify-between bg-[#124731] py-5 px-6 rounded-xl">
              <div className=" w-56 flex flex-col md:flex-row md:w-max md:mr-8">
                <h3 className=" text-3xl leading-none mb-2 md:mb-0 md:mr-8">
                  Volutpat quis tortor.
                </h3>
                <p
                  className={`${poppins.className} text-xs lg:text-base max-w-md lg:leading-none lg:font-medium lg:mt-2 font-light text-justify text-[#909762]`}
                >
                  Established in 1985, Serenity Dining Co. has been a cherished
                  culinary destination, captivating the hearts of patrons with
                  its timeless elegance and exceptional cuisine.
                </p>
              </div>
              <span className={`${poppins.className} py-2 lg:text-lg`}>
                $29
              </span>
            </div>
            <div className="flex w-full max-w-5xl justify-between bg-[#124731 py-5 px-6 rounded-xl">
              <div className=" w-52 flex flex-col md:flex-row md:w-max md:mr-8">
                <h3 className=" text-3xl leading-none mb-2 md:mb-0 md:mr-8">
                  Volutpat quis tortor.
                </h3>
                <p
                  className={`${poppins.className} text-xs lg:text-base max-w-md lg:leading-none lg:font-medium lg:mt-2 font-light text-justify text-[#909762]`}
                >
                  Established in 1985, Serenity Dining Co. has been a cherished
                  culinary destination, captivating the hearts of patrons with
                  its timeless elegance and exceptional cuisine.
                </p>
              </div>
              <span className={`${poppins.className} py-2 lg:text-lg`}>
                $29
              </span>
            </div>
            <div className="flex w-full max-w-5xl justify-between bg-[#124731] py-5 px-6 rounded-xl">
              <div className=" w-52 flex flex-col md:flex-row md:w-max md:mr-8">
                <h3 className=" text-3xl leading-none mb-2 md:mb-0 md:mr-8">
                  Volutpat quis tortor.
                </h3>
                <p
                  className={`${poppins.className} text-xs lg:text-base max-w-md lg:leading-none lg:font-medium lg:mt-2 font-light text-justify text-[#909762]`}
                >
                  Established in 1985, Serenity Dining Co. has been a cherished
                  culinary destination, captivating the hearts of patrons with
                  its timeless elegance and exceptional cuisine.
                </p>
              </div>
              <span className={`${poppins.className} py-2 lg:text-lg`}>
                $29
              </span>
            </div>
            <div className="flex w-full max-w-5xl justify-between bg-[#124731 py-5 px-6 rounded-xl">
              <div className=" w-52 flex flex-col md:flex-row md:w-max md:mr-8">
                <h3 className=" text-3xl leading-none mb-2 md:mb-0 md:mr-8">
                  Volutpat quis tortor.
                </h3>
                <p
                  className={`${poppins.className} text-xs lg:text-base max-w-md lg:leading-none lg:font-medium lg:mt-2 font-light text-justify text-[#909762]`}
                >
                  Established in 1985, Serenity Dining Co. has been a cherished
                  culinary destination, captivating the hearts of patrons with
                  its timeless elegance and exceptional cuisine.
                </p>
              </div>
              <span className={`${poppins.className} py-2 lg:text-lg`}>
                $29
              </span>
            </div>
          </div>
        </section>
        <section className=" w-full flex justify-center bg-slate-30 relative mb-52 lg:mb-96">
          <div className="w-36 h-52 absolute mr-32 md:mr-64 lg:mr-[550px] -top-5 lg:-top-10">
            <div className="w-20 h-10 md:w-28 md:h-14 lg:w-40 lg:h-24 bg-slate-700 absolute -top-8 -right-12 md:-top-12 md:-right-24 lg:-top-20 lg:-right-96 z-20">
              <Image
                src={"/home/gallery3.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-36 md:w-28 md:h-48 lg:w-28 lg:h-80 bg-slate-600 absolute bottom-9 md:-bottom-3 lg:-bottom-36 -left-5 lg:-left-10 z-0">
              <Image
                src={"/home/gallery4.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-52 md:w-44 md:h-64 lg:w-80 lg:h-96 bg-slate-400 z-10 absolute">
              <Image
                src={"/home/gallery2.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-44 bg-slate-600 absolute -bottom-10 -right-10 z-20 md:-bottom-24 md:-right-20 lg:-bottom-60 lg:-right-60">
              <Image
                src={"/home/gallery1.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-56 md:w-72 lg:w-[410px] z-40 ml-32 md:ml-60 ">
            <div className="flex items-center">
              <span
                className={`mr-2 ${poppins.className} text-sm lg:text-base`}
              >
                Serenity Dining Co.
              </span>
              <div className="flex-1 w-20 h-[1px] bg-[#EEC800]"></div>
            </div>
            <h1 className=" text-4xl md:text-5xl lg:text-7xl mb-2 leading-none lg:leading-[60px]">
              A HAVEN OF SHOPISCATED CALM
            </h1>
            <Link
              href={"/gallery"}
              className={`${poppins.className} button border-[1px] text-xs lg:text-sm py-[6px] px-3 w-max`}
            >
              VIEW GALLERY
            </Link>
          </div>
        </section>
        <section className="mb-60">
          <h1 className=" text-center text-[38px] md:text-5xl lg:text-6xl mb-16">
            SERVICES
          </h1>
          <div className=" grid grid-cols-2 gap-y-5 md:gap-y-0 md:grid-cols-4 md:gap-x-4 lg:grid-cols-2 xl:grid-cols-4">
            <div className=" w-40 lg:w-72 bg-slate-20 text-center flex flex-col items-center relative">
              <Image
                src={"/home/service1.svg"}
                alt=""
                width={100}
                height={100}
                className="mix-blend-screen w-28 h-28 lg:w-44 lg:h-44 absolute"
              />
              <h3 className=" leading-none text-xl lg:text-4xl mb-2 mt-20 lg:mt-28">
                PRIVATE DINING OPTIONS
              </h3>
              <p
                className={`${poppins.className} text-[#C7BA76] text-xs lg:text-sm font-light leading-none`}
              >
                Exclusive private dining spaces for intimate gatherings or
                special occasions, complete with personalized menus and
                attentive service.
              </p>
            </div>
            <div className=" w-40 lg:w-72 bg-slate-20 text-center flex flex-col items-center relative">
              <Image
                src={"/home/service2.svg"}
                alt=""
                width={100}
                height={100}
                className="mix-blend-screen w-28 h-28 lg:w-44 lg:h-44 absolute"
              />
              <h3 className=" leading-none text-xl lg:text-4xl mb-2 mt-20 lg:mt-28">
                ARTISANAL CULINARY EVENTS
              </h3>
              <p
                className={`${poppins.className} text-[#C7BA76] text-xs lg:text-sm font-light leading-none`}
              >
                Host periodic culinary events, such as chef&apos;s table
                dinners, wine tastings, and themed evenings, unique and
                memorable experiences.
              </p>
            </div>
            <div className=" w-40 lg:w-72 bg-slate-20 text-center flex flex-col items-center relative">
              <Image
                src={"/home/service3.svg"}
                alt=""
                width={100}
                height={100}
                className="mix-blend-screen w-28 h-28 lg:w-44 lg:h-44 absolute"
              />
              <h3 className=" leading-none text-xl lg:text-4xl mb-2 mt-20 lg:mt-28">
                PERSONALIZED CONCIERGE
              </h3>
              <p
                className={`${poppins.className} text-[#C7BA76] text-xs lg:text-sm font-light leading-none`}
              >
                Crafting personalized reservations, fulfilling special requests,
                and orchestrating exclusive dining experiences for ultimate
                satisfaction.
              </p>
            </div>
            <div className=" w-40 lg:w-72 bg-slate-20 text-center flex flex-col items-center relative">
              <Image
                src={"/home/service4.svg"}
                alt=""
                width={100}
                height={100}
                className="mix-blend-screen w-28 h-28 lg:w-44 lg:h-44 absolute"
              />
              <h3 className=" leading-none text-xl lg:text-4xl mb-2 mt-20 lg:mt-28">
                SOMMELIER EXPERTISE
              </h3>
              <p
                className={`${poppins.className} text-[#C7BA76] text-xs lg:text-sm font-light leading-none`}
              >
                A knowledgeable sommelier to guide guests through an extensive
                wine selection, offering expert pairings to enhance their
                culinary journey.
              </p>
            </div>
          </div>
        </section>
        <footer className=" w-[90%] md:flex flex-row-reverse justify-between items-end">
          <div className=" w-full max-w-xs lg:max-w-lg xl:max-w-[600px] flex flex-col items-end md:space-y-3 mb-40 md:mb-0">
            <h1 className=" text-4xl lg:text-6xl text-right w-60 lg:w-[600px]">
              SEND AN EMAIL TO US
            </h1>
            <div className="w-full flex space-x-[2px] items-center">
              <div className=" border-[#6E7B1F] border-[1px] w-2 h-2 rounded-full"></div>
              <div className=" border-[#6E7B1F] border-[1px] w-[13px] h-[13px] rounded-full"></div>
              <div className=" border-[#6E7B1F] border-[1px] w-4 h-4 rounded-full"></div>
              <div className=" bg-[#6E7B1F] flex-1 h-[1px]"></div>
            </div>
            <button
              className={`text-sm border-[1px] border-[#eec800] rounded-lg hover:bg-[#eec800] hover:text-[#0D3323] duration-300 ease-in-out px-4 py-1 ${poppins.className}`}
            >
              GOT TO EMAIL
            </button>
          </div>
          <Footer />
        </footer>
      </main>
    </>
  );
}
