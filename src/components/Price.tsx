import React from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${price.toFixed(2)}</h2>
      {/* Options Container */}
      <div className="flex gap-4">
        {options?.map((option) => (
          <button
            className="p-2 ring-1 ring-red-400 rounded-md"
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add to Cart Container */}
      <div className="flex justify-between items-center">
        {/* Quantity Selector */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400 rounded-md ">
          <span>Quantity</span>
          <div className="flex gap-4">
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* Add to Cart Button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
