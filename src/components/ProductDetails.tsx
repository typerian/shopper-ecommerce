import Image from "next/image";
import React from "react";
import type all_product from "./Assets/all_product";
import star_dull_icon from "@/components/Assets/star_dull_icon.png";
import star_icon from "@/components/Assets/star_icon.png";
import { useShopperStore } from "@/store";

const ProductDetails = ({ product }: { product: (typeof all_product)[0] }) => {
  const { cart, addToCart } = useShopperStore();
  console.log(cart);
  return (
    <div className="productdisplay mx-[170px] flex">
      <div className="productDisplay-left flex gap-4">
        <div className="productDisplay-img-list flex flex-col gap-4">
          <Image className="h-[163px]" src={product.image} alt="" />
          <Image className="h-[163px]" src={product.image} alt="" />
          <Image className="h-[163px]" src={product.image} alt="" />
          <Image className="h-[163px]" src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <Image
            className="productDisplay-main-img h-[700px] w-[586px]"
            alt=""
            src={product.image}
          />
        </div>
      </div>
      <div className="productDisplay-right mx-[70px] flex flex-col">
        <h1 className="text-[40px] font-bold text-[#3d3d3d]">{product.name}</h1>
        <div className="productDisplay-right-stars mt-3 flex items-center gap-1 text-lg text-[#1c1c1c]">
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_icon} alt="" />
          <Image src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices my-10 flex gap-4 font-bold">
          <div className="productDisplay-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productDispaly-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          distinctio odio adipisci nulla earum quia totam. Doloribus
          reprehenderit vel sapiente nulla quas quidem modi veniam iusto, labore
          perferendis minima voluptates.
        </div>
        <div className="productDisplay-right-size">
          <h1 className="mt-[55px] text-xl font-semibold text-[#656565]">
            Select Size
          </h1>
          <div className="productDisplay-right-sizes my-7 flex gap-5">
            <div className="cursor-pointer rounded-[3px] border-2 bg-[#fbfbfb] px-[24px] py-[18px]">
              S
            </div>
            <div className="cursor-pointer rounded-[3px] border-2 bg-[#fbfbfb] px-[24px] py-[18px]">
              M
            </div>
            <div className="cursor-pointer rounded-[3px] border-2 bg-[#fbfbfb] px-[24px] py-[18px]">
              L
            </div>
            <div className="cursor-pointer rounded-[3px] border-2 bg-[#fbfbfb] px-[24px] py-[18px]">
              XL
            </div>
            <div className="cursor-pointer rounded-[3px] border-2 bg-[#fbfbfb] px-[24px] py-[18px]">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => addToCart(product.id)}
          className="mb-10 w-[200px] bg-[#ff4141] px-10 py-5 text-lg font-semibold uppercase text-white"
        >
          Agregar al Carrito
        </button>
        <p className="productdisplay-right-category mt-3">
          <span className="font-semibold">Categoria: </span>
          Women, T-Srit, Crop Top
        </p>
        <p className="productdisplay-right-category mt-3">
          <span className="font-semibold">Etiquetas: </span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
