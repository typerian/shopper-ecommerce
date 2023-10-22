import Image, { type StaticImageData } from "next/image";
import dropdown_icon from "@/components/Assets/dropdown_icon.png";
import { useShopperStore } from "@/store";
import Item from "./Item/Item";

const ShopCategory = ({
  category,
  banner,
}: {
  category: "men" | "women" | "kid";
  banner: StaticImageData;
}) => {
  const { products } = useShopperStore();
  return (
    <div className="shop-category">
      <Image
        src={banner}
        alt=""
        className="shopcategory-banner mx-auto my-[30px] w-[82%]"
      />
      <div className="shopcategory-indexSort mx-[170px] flex items-center justify-between">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex rounded-[40px] border-2 px-[20px] py-[10px]">
          Sort by <Image src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products mx-[140px] my-[20px] grid grid-cols-3 gap-4">
        {products.map((item) => {
          if (category === item.category) {
            return (
              <Item
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore mx-auto my-[150px] flex h-[69px] w-[233px] items-center justify-center rounded-[75px] bg-[#ededed] text-lg font-medium text-[#787878]">
        Explorar más
      </div>
    </div>
  );
};

export default ShopCategory;
