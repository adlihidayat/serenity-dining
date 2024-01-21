"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import useSWR from "swr";
import { signIn, useSession } from "next-auth/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const MenuCard = ({ data, index }: any) => {
  const session = useSession();

  const fetcher = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    return res.json();
  };

  const { data: item, mutate } = useSWR(
    `/api/cart?userId=${session?.data?.user?.email}&itemId=${data.id}`,
    fetcher
  );

  const submit = async (e: any) => {
    e.preventDefault();
    if (session.data) {
      try {
        if (item.id === "") {
          const response = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
              userEmail: session?.data?.user?.email,
              itemId: data.id,
              quantity: 1,
              price: data.price,
            }),
          });
          if (response.ok) {
            ("new!");
          }
        } else {
          const response = await fetch(`/api/cart/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify({
              quantity: item.quantity + 1,
              price: item.price + data.price,
            }),
          });
          if (response.ok) {
            ("added!");
          }
        }
      } catch (error) {
        error;
      }
      mutate();
    } else {
      signIn();
    }
  };

  return (
    <div className="">
      <div
        className={`${
          index % 2 === 0 ? "bg-[#124731]" : " bg-transparent"
        } w-full max-w-md lg:max-w-4xl xl:max-w-6xl  py-5 px-6 rounded-xl flex flex-col lg:flex-row lg:items-center md:w-ma md:mr-8`}
      >
        <h3 className=" text-3xl xl:text-4xl leading-none mb-2  md:mr-8 md:w-60">
          {data.name}
        </h3>
        <p
          className={`${poppins.className} lg:mr-5 xl:mr-20 2xl:mr-40 mb-3 text-sm lg:text-base max-w-md lg:leading-none lg:font-medium lg:mt-2 font-light text-justify text-[#909762]`}
        >
          {data.description}
        </p>
        <div className="lg:flex items-center lg:h-max">
          <span className={`${poppins.className} lg:text-xl mr-4  `}>
            ${data.price}
          </span>
          <button
            onClick={submit}
            className={`${poppins.className} w-min text-xs lg:text-base border px-4 lg:px-5 py-[4px] border-[#eec800] rounded hover:bg-[#eec800] hover:text-[#0D3323] duration-300 ease-in-out`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
