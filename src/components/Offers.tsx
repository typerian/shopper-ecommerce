import Image from "next/image";
import React from "react";
import exclusive_image from "@/components/Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      className="offers m-auto mb-[150px] flex h-[60vh] w-[85%] px-[140px]"
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
    >
      <div
        className="offers-left flex flex-col justify-center "
        style={{ flex: 1 }}
      >
        <h1 className="text-[50px] font-semibold leading-tight text-[#171717]">
          Exclusive
        </h1>
        <h1 className="text-[50px] font-semibold leading-tight text-[#171717]">
          Offers For You
        </h1>
        <p className="text-lg font-semibold uppercase text-[#171717]">
          only on best sellers products
        </p>
        <button className="mt-8 h-[70px] w-[282px] cursor-pointer rounded-[35px] bg-[#ff4141] text-2xl font-medium text-white">
          Check Now
        </button>
      </div>
      <div
        className="offers-right flex items-center justify-end pt-[50px]"
        style={{ flex: 1 }}
      >
        <Image src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
