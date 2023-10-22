import React from "react";

const Description = () => {
  return (
    <div className="descriptionbox mx-[170px] my-[120px]">
      <div className="description-navigator flex">
        <div className="descriptionbox-nav-box flex h-[70px] w-[171px] items-center justify-center border-2 text-lg font-semibold ">
          Description
        </div>
        <div className="descriptionbox-nav-box fade flex h-[70px] w-[171px] items-center justify-center border-2 bg-[#fbfbfb] text-lg font-semibold text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col gap-6 border-2 p-12 pb-[70px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          excepturi accusantium repellendus esse officiis inventore beatae, illo
          totam autem quasi nam. Sint sequi culpa cupiditate maxime blanditiis,
          ratione non magnam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, laboriosam quia? Doloribus nihil quaerat consequatur
          dolor reprehenderit veniam sapiente maiores error at tenetur cum
          officiis, laborum blanditiis dignissimos dicta? Necessitatibus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum quam
          saepe aliquid, quisquam consequatur provident libero error fugit
          dolores quos ipsa esse explicabo tenetur, labore velit maiores
          voluptatum odio?
        </p>
      </div>
    </div>
  );
};

export default Description;
