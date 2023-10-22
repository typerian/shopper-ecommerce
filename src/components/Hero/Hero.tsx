import Image from "next/image";
import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div
      className="hero flex h-screen justify-around"
      style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}
    >
      <div className="hero-le flex flex-col justify-center gap-5 pl-[180px]">
        <h2 className="font-sans text-2xl font-bold uppercase text-[#090909]">
          New Arrivals Only
        </h2>
        <div className="leading-none">
          <div className="hero-hand-icon flex items-center gap-5">
            <p className="text-[100px] font-bold text-[#171717]">new</p>
            <Image src={hand_icon} alt="" width={100} height={100} />
          </div>
          <p className="text-[100px] font-bold text-[#171717]">collections</p>
          <p className="text-[100px] font-bold text-[#171717]">for everyone</p>
        </div>
        <div className="hero-latest-btn mt-8 flex h-16 w-80 items-center justify-center gap-4 rounded-[75px] bg-[#ff4141] text-xl font-medium text-white">
          <div>Latet Collection</div>
          <Image src={arrow} alt="" />
        </div>
      </div>
      <div
        className="hero-right flex items-center justify-center"
        style={{ flex: 1 }}
      >
        <Image src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
