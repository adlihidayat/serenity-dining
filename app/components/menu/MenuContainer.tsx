import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const Main = ({ menu }: any) => {
  return menu?.map(
    (item: any, index: any) =>
      item.type === "MAIN DISH" && (
        <MenuCard key={item.id} data={item} index={index} />
      )
  );
};
const Side = ({ menu }: any) => {
  return menu?.map(
    (item: any, index: Number) =>
      item.type === "SIDE DISH" && (
        <MenuCard key={item.id} data={item} index={index} />
      )
  );
};
const Drink = ({ menu }: any) => {
  return menu?.map(
    (item: any, index: Number) =>
      item.type === "DRINK" && (
        <MenuCard key={item.id} data={item} index={index} />
      )
  );
};

async function getData() {
  const res = await fetch("https://serenity-dining.vercel.app/api/item");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MenuContainer = async () => {
  const menus = await getData();

  return (
    <>
      <section className="w-[90%] sm:w-max flex flex-col items-center">
        <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
          <h1 className=" text-2xl lg:text-3xl">MAIN DISH</h1>
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
        </div>
        <Main menu={menus} />
      </section>
      <section className="w-[90%] sm:w-max flex flex-col items-center mt-40">
        <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
          <h1 className=" text-2xl lg:text-3xl">SIDE DISH</h1>
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
        </div>
        <Side menu={menus} />
      </section>
      <section className="w-[90%] sm:w-max flex flex-col items-center mt-40">
        <div className="w-full justify-start bg-slate-00 flex items-center space-x-2 mb-5">
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
          <h1 className=" text-2xl lg:text-3xl">DRINK</h1>
          <div className=" h-[1px] w-10 bg-[#eec800]"></div>
        </div>
        <Drink menu={menus} />
      </section>
    </>
  );
};

export default MenuContainer;
