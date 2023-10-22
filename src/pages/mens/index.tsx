import ShopCategory from "@/components/ShopCategory";
import men_banner from "@/components/Assets/banner_mens.png";

const index = () => {
  return (
    <div>
      <ShopCategory category="men" banner={men_banner} />
    </div>
  );
};

export default index;
