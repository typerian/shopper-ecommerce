import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const Item = ({
  id,
  image,
  name,
  new_price,
  old_price,
}: {
  id: number;
  image: StaticImageData;
  name: string;
  new_price: number;
  old_price: number;
}) => {
  return (
    <div className="item w-[350px] transition duration-75 hover:scale-105">
      <Link href={`/product/${id}`}>
        <Image src={image} alt="" onClick={void window.scroll(0, 0)} />
      </Link>
      <p className="my-[6px]">{name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-xl font-semibold text-[#374151]">
          ${new_price}
        </div>
        <div className="item-price-old text-xl font-medium text-[#8c8c8c] line-through">
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
