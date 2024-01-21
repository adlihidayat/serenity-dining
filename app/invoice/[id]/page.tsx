import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Table from "../../components/invoice/Table";
import Link from "next/link";
import { getServerSession } from "next-auth";
import LoginButton from "@/app/components/LoginButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

async function getData(id: any) {
  const res = await fetch(`/api/order/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }: any) => {
  const session = await getServerSession();
  const data: any = await getData(params.id);
  return (
    <>
      {data[0].userEmail === session?.user?.email ? (
        <main
          className={`${poppins.className}  w-full flex justify-center mt-32 md:mt-48 text-xs px-10 pb-20`}
        >
          <div className=" w-full max-w-4xl">
            <h1 className=" text-sm font-medium mb-2">INVOICE</h1>
            <div className="flex flex-col mb-4">
              <p>Serenity Dining Co.</p>
              <p>Los Angeles, USA</p>
            </div>
            <div className=" w-full flex justify-between mb-10">
              <div className="h-14 flex flex-col justify-between">
                <h3 className=" text-sm font-medium">BILL TO</h3>
                <div>
                  <p>{data[0].name}</p>
                  <p>{}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between h-14 text-xs">
                <div className="flex items-center">
                  <h3 className="  w-[65px]  font-medium">INVOICE #</h3>
                  <span className=" w-[80px] text-right ">US-001</span>
                </div>
                <div className="flex items-center">
                  <h3 className="  w-[65px]  font-medium">DATE</h3>
                  <span className=" w-[80px] text-right ">28-07-2022</span>
                </div>
                <div className="flex items-center">
                  <h3 className="  w-[65px]  font-medium">BOOKING</h3>
                  <span className=" w-[80px] text-right ">US-001</span>
                </div>
              </div>
            </div>
            <table className=" w-full mb-12">
              <thead>
                <tr className=" border-y border-[#eec800] h-8">
                  <th className="w-10">QTY</th>
                  <th className=" md:w-80 px-4 text-left">FOOD NAME</th>
                  <th className=" text-right">PRICE</th>
                  <th className=" text-right">AMOUNT</th>
                </tr>
              </thead>
              <Table data={data} />
            </table>
            <div className=" flex justify-end mb-20">
              <div className="flex flex-col items-center">
                <Image
                  src={"/sign.png"}
                  alt=""
                  height={100}
                  width={100}
                  className=" w-20"
                  priority
                />
                <span className=" font-light">Sam Smith Ph. D</span>
                <h3 className=" font-medium text-xs">
                  EXECUTIVE BRANCH MANAGER
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href={"/"}
                className=" border border-[#eec800] py-1 px-4 rounded button"
              >
                BACK HOME
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main className="mt-[40vh] flex flex-col items-center">
          <p className=" text-center md:text-lg">
            please login with the same account
          </p>
          <LoginButton />
        </main>
      )}
    </>
  );
};

export default page;
