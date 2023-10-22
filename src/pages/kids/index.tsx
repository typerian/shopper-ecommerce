import ShopCategory from "@/components/ShopCategory";
import React from "react";
import kid_banner from "@/components/Assets/banner_kids.png";

const index = () => {
  return (
    <div>
      <ShopCategory category="kid" banner={kid_banner} />
    </div>
  );
};

export default index;
