"use client";
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import useSWR from "swr";

const MenuContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    setIsLoading(false);
    return res.json();
  };

  const { data: menus, mutate } = useSWR("/api/item", fetcher);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <>
          <section className="w-[90%] sm:w-max flex flex-col items-center">
            <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
              <h1 className=" text-2xl lg:text-3xl">MAIN DISH</h1>
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
            </div>
            {menus?.map(
              (item: any, index: any) =>
                item.type === "MAIN DISH" && (
                  <MenuCard key={item.id} data={item} index={index} />
                )
            )}
          </section>
          <section className="w-[90%] sm:w-max flex flex-col items-center mt-40">
            <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
              <h1 className=" text-2xl lg:text-3xl">SIDE DISH</h1>
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
            </div>
            {menus?.map(
              (item: any, index: Number) =>
                item.type === "SIDE DISH" && (
                  <MenuCard key={item.id} data={item} index={index} />
                )
            )}
          </section>
          <section className="w-[90%] sm:w-max flex flex-col items-center mt-40">
            <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
              <h1 className=" text-2xl lg:text-3xl">DRINK</h1>
              <div className=" h-[1px] w-10 bg-[#eec800]"></div>
            </div>
            {menus?.map(
              (item: any, index: Number) =>
                item.type === "DRINK" && (
                  <MenuCard key={item.id} data={item} index={index} />
                )
            )}
          </section>
        </>
      )}
    </>
  );
};

export default MenuContainer;
