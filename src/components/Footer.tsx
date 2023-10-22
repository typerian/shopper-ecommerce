import Image from "next/image";
import React from "react";
import footer_logo from "@/components/Assets/logo_big.png";
import instagram_icon from "@/components/Assets/instagram_icon.png";
import pinterest_icon from "@/components/Assets/pintester_icon.png";
import whatsapp_icon from "@/components/Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center gap-[50px]">
      <div className="footer-logo flex items-center gap-5">
        <Image src={footer_logo} alt="" />
        <p className="text-5xl font-bold text-[#383838]">SHOPPER</p>
      </div>
      <ul className="footer-links flex gap-[50px] text-2xl text-[#252525]">
        <li className="cursor-pointer">Compañia</li>
        <li className="cursor-pointer">Productos</li>
        <li className="cursor-pointer">Oficios</li>
        <li className="cursor-pointer">Acerca</li>
        <li className="cursor-pointer">Contacto</li>
      </ul>

      <div className="footer-social-icon flex gap-5">
        <div className="footer-icons-container border bg-[#fbfbfb] p-3 pb-2">
          <Image src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container border bg-[#fbfbfb] p-3 pb-2">
          <Image src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container border bg-[#fbfbfb] p-3 pb-2">
          <Image src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div className="mb-30px flex w-[100%] flex-col items-center gap-[30px] text-[#1a1a1a]">
        <div className="h-[3px] w-[80%] rounded-[10px] bg-[#c7c7c7]"></div>
        <p>Copyright @ 2023 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
