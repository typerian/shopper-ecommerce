import React from "react";
import new_collections from "./Assets/new_collections";
import Item from "./Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections mb-[100px] flex flex-col items-center gap-2">
      <h1 className="text-[50px] font-semibold text-[#171717]">
        NEW COLLECTIONS
      </h1>
      <div className="h-2 w-[200px] rounded-[10px] bg-[#252525]"></div>
      <div className="collections mt-[50px] grid grid-cols-4 gap-[30px]">
        {new_collections.map((item) => {
          return (
            <Item
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
