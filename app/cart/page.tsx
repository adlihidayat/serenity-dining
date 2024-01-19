import React from "react";
import ContentContainer from "../components/cart/ContentContainer";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mt-36 md:mt-[200px] px-10 pb-14 xl:pb-28 overflow-x-hidden">
      <div className="flex items-center space-x-3 mb-10">
        <div className=" w-10 h-[1px] bg-[#EEC800]"></div>
        <h1 className=" text-xl">CART ITEM</h1>
        <div className=" w-10 h-[1px] bg-[#EEC800]"></div>
      </div>

      {/* cart item */}
      <ContentContainer />
    </main>
  );
};

export default page;
