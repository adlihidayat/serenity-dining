import React from "react";

const Table = async ({ data }: any) => {
  let foodData = [];
  let items = data[0].items.split(",");
  for (let i = 0; i < items.length; i++) {
    let parts = items[i].split("-");
    let obj = {
      item: {
        name: parts[1],
        price: Number(parts[2]),
      },
      quantity: Number(parts[0]),
      total: Number(parts[3]),
    };
    foodData.push(obj);
  }

  return (
    <tbody>
      {foodData?.map((food: any, index: any) => (
        <tr className="font-light" key={index}>
          <th>{food.quantity}</th>
          <th className="h-16 px-4 text-left">{food.item.name}</th>
          <th className=" text-right">{food.item.price}</th>
          <th className=" text-right">{food.total}</th>
        </tr>
      ))}
      <tr className="font-light">
        <th></th>
        <th className="w-40 h-16 px-4 text-left"></th>
        <th className=" text-right">UNPAID</th>
        <th className=" text-right">{data[0].price - data[0].paid}</th>
      </tr>
      <tr className="font-light">
        <th></th>
        <th className="w-40 h-16 px-4 text-left"></th>
        <th className=" text-right">DEPOSIT</th>
        <th className=" text-right">{data[0].paid}</th>
      </tr>
      <tr className="font-light">
        <th></th>
        <th className="w-40 h-16 px-4 text-left"></th>
        <th className=" text-right">TOTAL</th>
        <th className=" text-right">{data[0].price}</th>
      </tr>
    </tbody>
  );
};

export default Table;
