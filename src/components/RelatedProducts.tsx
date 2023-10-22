import React from "react";
import data_product from "./Assets/data";
import Item from "./Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex h-[90vh] flex-col items-center gap-3">
      <h1 className="text-5xl font-semibold text-[#171717]">
        Related Products
      </h1>
      <div className="h-[6px] w-[200px] rounded-[10px] bg-[#252525]"></div>
      <div className="relatedProduct-item mt-12 flex gap-7">
        {data_product.map((item) => {
          return (
            <Item
              id={item.id}
              image={item.image}
              name={item.name}
              key={item.id}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
