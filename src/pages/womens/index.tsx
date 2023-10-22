import ShopCategory from "@/components/ShopCategory";
import women_banner from "@/components/Assets/banner_women.png";

const index = () => {
  return (
    <div>
      <ShopCategory category="women" banner={women_banner} />
    </div>
  );
};

export default index;
