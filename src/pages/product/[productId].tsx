import Description from "@/components/Description";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import { useShopperStore } from "@/store";
import { useRouter } from "next/router";
import React from "react";

const ProductId = () => {
  const { products } = useShopperStore();
  const router = useRouter();
  const product = products.find(
    (prod) => prod.id === Number(router.query.productId),
  );

  if (product) {
    return (
      <>
        <ProductDetails product={product} />
        <Description />
        <RelatedProducts />
      </>
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
};

export default ProductId;
