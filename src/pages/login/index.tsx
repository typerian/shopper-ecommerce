import React from "react";

const index = () => {
  return (
    <div className="loginsignup m-auto h-[80vh] w-[100%] bg-white px-[60px] py-[40px]">
      <div className="loginsignup-container m-auto h-[600px] w-[580px] bg-white px-[60px] py-[40px]">
        <h1 className="my-[20px]">Sign Up</h1>
        <div className="loginsignup-fields mt-7 flex flex-col gap-7">
          <input
            className="h-[72px] w-[100%] border-2 pl-5 text-lg text-[#5c5c5c]"
            type="text"
            placeholder="Tu nombre"
          />
          <input
            className="h-[72px] w-[100%] border-2 pl-5 text-lg text-[#5c5c5c]"
            type="email"
            placeholder="example@email.com"
          />
          <input
            className="h-[72px] w-[100%] border-2 pl-5 text-lg text-[#5c5c5c]"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <button className="mt-7 h-[72px] w-[100%] cursor-pointer bg-[#ff4141] text-2xl font-medium text-white">
          Continuar
        </button>
        <p className="loginsignup-login mt-5 text-lg font-medium text-[#5c5c5c]">
          Ya tienes una cuenta?{" "}
          <span className="font-semibold text-[#ff4141]">
            Inicia Sesión aqui
          </span>
        </p>
        <div className="loginsignup-agree mt-6 flex items-center gap-5 text-lg font-medium text-[#5c5c5c]">
          <input type="checkbox" name="" id="" />
          <p>
            Para continuar, acepta los términos de uso y políticas de privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
