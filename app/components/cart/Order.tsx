"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Order = ({ data, totalPrice, session }: any) => {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [datetime, setDatetime] = useState("");
  const router = useRouter();

  let result = "";
  for (let i = 0; i < data?.length; i++) {
    let item = data[i];

    result +=
      item.quantity +
      "-" +
      item.item.name +
      "-" +
      item.item.price +
      "-" +
      item.price;
    if (i < data.length - 1) {
      result += ",";
    }
  }

  const order = async (e: any) => {
    e.preventDefault();
    // let back = [];
    // let items = result.split(",");
    // for (let i = 0; i < items.length; i++) {
    //   let parts = items[i].split("-");
    //   let obj = {
    //     item: {
    //       name: parts[1],
    //       price: Number(parts[2]),
    //     },
    //     quantity: Number(parts[0]),
    //     total: Number(parts[3]),
    //   };
    //   back.push(obj);
    // }
    let items: any = [];

    for (const item of data) {
      items.push({
        name: item.item.name,
        price: item.item.price,
        quantity: item.quantity,
      });
    }
    items.push({
      name: "room",
      price: roomType,
      quantity: 1,
    });

    const responseOrder = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        userEmail: session.data.user.email,
        name: name,
        price: totalPrice + Number(roomType),
        data: items,
        items: result,
        type: roomType,
        place: location,
        Date: datetime,
        paid: ((totalPrice + Number(roomType)) * 5) / 10,
      }),
    });
    if (responseOrder.ok) {
      const json = await responseOrder.json();
      router.push(json);
    }
  };

  return (
    <form
      onSubmit={order}
      className={`mt-20 rounded-lg ${poppins.className} w-full bg-[#001A0F] px-5 py-7  text-xs md:text-sm max-w-4xl`}
    >
      <input
        value={name}
        type="text"
        className=" w-full mb-3 max-w-4xl bg-[#D9D9D9] px-3 py-1 rounded text-black outline-none"
        placeholder="name"
        onChange={(e: any) => setName(e.target.value)}
      />
      <div className=" w-full flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 mb-3 max-w-4xl">
        <select
          value={roomType}
          name=""
          id=""
          className="flex-1 bg-[#D9D9D9] px-3 py-1 rounded text-gray-800"
          onChange={(e: any) => setRoomType(e.target.value)}
        >
          <option value={0} disabled className=" text-gray-200">
            choose room type
          </option>
          <option value={30} className="text-black">
            Rooftop Dining ($30)
          </option>
          <option value={45} className="text-black">
            Private Dining Room ($45)
          </option>
          <option value={25} className="text-black">
            Garden Terrace ($25)
          </option>
          <option value={30} className="text-black">
            Sunset Cocktails And Tapas ($30)
          </option>
        </select>
        <select
          value={location}
          name=""
          id=""
          onChange={(e: any) => setLocation(e.target.value)}
          className="flex-1  bg-[#D9D9D9] px-3 py-1 rounded text-gray-800"
        >
          <option value="" disabled className=" text-gray-200">
            choose your city
          </option>
          <option value="Tokyo, Japan" className="text-black">
            Tokyo, Japan
          </option>
          <option value="Los Angles, USA" className="text-black">
            Los Angles, USA
          </option>
        </select>
      </div>
      <input
        value={datetime}
        onChange={(e: any) => setDatetime(e.target.value)}
        type="date"
        className=" w-full mb-8 max-w-4xl bg-[#D9D9D9] px-3 py-1 rounded text-black outline-none"
      />
      <div className=" w-full max-w-4xl flex justify-between items-center">
        <h4 className=" font-semibold">
          TOTAL PRICE : ${totalPrice + Number(roomType)}
        </h4>
        <input
          type="submit"
          onClick={order}
          disabled={
            name === "" || location === "" || datetime === "" || roomType === 0
          }
          className=" disabled:opacity-50 disabled:hover:hover:bg-[#175A3E] bg-[#175A3E] hover:bg-[#102e22] duration-300 ease-in-out px-3 py-1 rounded"
        />
      </div>
    </form>
  );
};

export default Order;
