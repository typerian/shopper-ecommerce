import React from "react";

const NewLetter = () => {
  return (
    <div
      className="newletter m-auto mb-[150px] flex h-[40vh] w-[85%] flex-col items-center justify-center gap-[30px] px-[140px]"
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
    >
      <h1 className="text-[45px] font-semibold text-[#454545]">
        Ontén exclusivas ofertas en tu email
      </h1>
      <p className="text-2xl leading-tight text-[#454545]">
        Subcribeté en nuestro New Letters y mantente actualizado
      </p>
      <div className="bottom-2 flex h-[70px] w-[730px] items-center justify-between rounded-[80px] bg-white">
        <input
          type="email"
          placeholder="example@email.com"
          className="ml-[30px] w-[500px] text-lg text-[#616161]"
        />
        <button className="h-[70px] w-[210px] cursor-pointer rounded-[80px] border-2 bg-black text-lg text-white">
          Subcribir
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
