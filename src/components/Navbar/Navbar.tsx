import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useShopperStore } from "@/store";

const Navbar = () => {
  const { cart } = useShopperStore();
  const [menu, setMenu] = useState<"shop" | "mens" | "womens" | "kids">("shop");
  const reducer = (
    accumulator: number,
    currentValue: (typeof cart)[0],
  ): number => {
    return accumulator + currentValue.cantidad;
  };
  const totalItems = cart.reduce(reducer, 0);
  return (
    <div className="flex justify-around p-4 shadow-md">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="" />
        <p className="text-4xl font-semibold text-[#171717]">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-[50px] text-xl font-medium">
        <li
          onClick={() => setMenu("shop")}
          className={`${
            menu === "shop" ? "border-b-4 border-[#FF4141] pb-3" : ""
          } flex cursor-pointer flex-col items-center justify-center gap-1`}
        >
          <Link href={"/"}>Shop</Link>
        </li>
        <li
          onClick={() => setMenu("mens")}
          className={`${
            menu === "mens" ? "border-b-4 border-[#FF4141] pb-3" : ""
          } flex cursor-pointer flex-col items-center justify-center gap-1`}
        >
          <Link href={"/mens"}>Men</Link>
        </li>
        <li
          onClick={() => setMenu("womens")}
          className={`${
            menu === "womens" ? "border-b-4 border-[#FF4141] pb-3" : ""
          } flex cursor-pointer flex-col items-center justify-center gap-1`}
        >
          <Link href={"/womens"}>Women</Link>
        </li>
        <li
          onClick={() => setMenu("kids")}
          className={`${
            menu === "kids" ? "border-b-4 border-[#FF4141] pb-3" : ""
          } flex cursor-pointer flex-col items-center justify-center gap-1`}
        >
          <Link href={"/kids"}>Kids</Link>
        </li>
      </ul>
      <div className="flex items-center gap-12">
        <Link href={"/login"}>
          <button className="h-14 w-36 rounded-[75px] border-2 bg-white text-xl font-medium text-[#515151] active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link href={"/cart"}>
          <Image src={cart_icon} alt="" />
        </Link>
        <div className="-ml-14 -mt-9 flex h-5 w-5 items-center justify-center rounded-[11px] bg-red-500 text-base text-white">
          {totalItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
