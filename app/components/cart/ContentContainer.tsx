"use client";
import React, { useEffect, useState } from "react";
import CardCart from "./CartCard";
import useSWR from "swr";
import { Forum, Poppins } from "next/font/google";
import Order from "./Order";
import { useSession } from "next-auth/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ContentContainer = () => {
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const session = useSession();

  const fetcher = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    setLoading(false);

    return res.json();
  };

  const { data: cart, mutate } = useSWR(
    `/api/cart/${session?.data?.user?.email}`,
    fetcher
  );

  const calculateTotalPrice = () => {
    if (cart) {
      const counting = cart.reduce(
        (acc: any, item: any) => acc + item.price,
        0
      );
      setTotalPrice(counting);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <>
      <section className=" w-full max-w-4xl">
        {loading ? (
          <p className=" text-center">loading</p>
        ) : cart?.length !== 0 ? (
          cart?.map((item: any, index: any) => (
            <CardCart data={item} key={index} index={index} mutate={mutate} />
          ))
        ) : (
          <p className=" text-center">no data found</p>
        )}
      </section>
      {!loading && cart?.length !== 0 && (
        <Order totalPrice={totalPrice} data={cart} session={session} />
      )}
    </>
  );
};
export default ContentContainer;
