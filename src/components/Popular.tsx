import React from "react";
import data_product from "./Assets/data";
import Item from "./Item/Item";

const Popular = () => {
  return (
    <div className="popular flex h-[90vh] flex-col items-center gap-3">
      <h1 className="text-5xl font-medium text-[#171717]">Popular in Women</h1>
      <div className="h-2 w-[200px] rounded-xl bg-[#252525]"></div>
      <div className="popular-item mt-12 flex gap-8">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
