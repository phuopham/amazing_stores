import React from "react";
import ListItems from "./ListItems";
import Totals from "./Totals";

const listItems = [
  {
    name: "Áo thun",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print",
    quantity: 2,
    price: 300000,
    svg: "/item-1.svg",
  },
  {
    name: "Item",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print",
    quantity: 1,
    price: 200000,
    svg: "/suggestion-1.svg",
  },
  {
    name: "Item",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print",
    quantity: 3,
    price: 400000,
    svg: "/suggestion-2.svg",
  },
  {
    name: "Item",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print",
    quantity: 1,
    price: 500000,
    svg: "/item-4.svg",
  },
];

function index() {
  return (
    <div className="flex h-[100vh] box-container flex-col bg-gray-100">
      <h2 className="w-full text-2xl font-semibold py-6">
        Giỏ hàng (0)
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <ListItems data={listItems} />
        <Totals data={listItems} />
      </div>
    </div>
  );
}

export default index;
