import React from "react";
import { Forum, Poppins } from "next/font/google";
import { useSession } from "next-auth/react";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const CardCart = ({ data, index, mutate }: any) => {
  const subtract = async (e: any) => {
    e.preventDefault();
    if (data.quantity > 1) {
      try {
        const response = await fetch(`/api/cart/${data.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            quantity: data.quantity - 1,
            price: data.price - data.item.price,
          }),
        });
        if (response.ok) {
          mutate();
          console.log("subtracted!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const add = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/cart/${data.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          quantity: data.quantity + 1,
          price: data.price + data.item.price,
        }),
      });
      if (response.ok) {
        mutate();
        console.log("added!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCart = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/cart/${data.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate();
        console.log("removed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${poppins.className} ${
        index % 2 === 0 ? "bg-[#124731]" : " bg-transparent"
      } bg-[#124731] w-full p-5 lg:px-7 rounded-xl md:flex justify-between`}
    >
      <div>
        <h1 className={` text-2xl ${forum.className} mb-1`}>
          {data.item.name}
        </h1>
        <h2 className=" text-sm text-[#909762] mb-2">{data.item.type}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 md:mr-10">
          <div className="font-semibold  ">
            <button
              className=" bg-[#062216] px-2 py-[2px] rounded-l"
              onClick={subtract}
            >
              -
            </button>
            <span className="  bg-[#1D533C] px-3 py-[2px]">
              {data.quantity}
            </span>
            <button
              className=" bg-[#062216] px-2 py-[2px] rounded-r"
              onClick={add}
            >
              +
            </button>
          </div>
          <span className=" w-10 text-center">${data.price}</span>
        </div>
        <button
          onClick={deleteCart}
          className="bg-[#5B2525] px-4 py-1 rounded-lg text-sm h-max"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default CardCart;
