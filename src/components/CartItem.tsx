import Image from "next/image";
import React from "react";
import remove_icon from "@/components/Assets/cart_cross_icon.png";
import { useShopperStore } from "@/store";

const CartItem = () => {
  const { cart, removeToCart } = useShopperStore();
  const reducer = (
    accumulator: number,
    currentValue: (typeof cart)[0],
  ): number => {
    return accumulator + currentValue.cantidad * currentValue.new_price;
  };
  const totalItems = cart.reduce(reducer, 0);
  return (
    <div className="cartItems mx-[170px] my-[100px]">
      <div className="cartItems-format-main grid grid-cols-6 items-center gap-[75px] py-5 text-lg font-semibold text-[#454545]">
        <p>Productos</p>
        <p>Titulo</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Eliminar</p>
      </div>
      <div className="h-1 bg-[#e2e2e2]"></div>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <div key={cartItem.id}>
            <div className="cartItems-format grid grid-cols-6 items-center gap-[75px] py-5 text-center text-lg font-medium text-[#454545]">
              <Image
                src={cartItem.image}
                alt=""
                className="carticon-product-icon"
              />
              <p>{cartItem.name}</p>
              <p>{cartItem.new_price}</p>
              <button className="cartItems-quantity h-12 w-[64px] border-2 bg-[#fff]">
                {cartItem.cantidad}
              </button>
              <p>{cartItem.new_price * cartItem.cantidad}</p>
              <Image
                className="cartItems-remove-icon mx-10 w-4 cursor-pointer"
                alt=""
                src={remove_icon}
                onClick={() => removeToCart(cartItem.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div>Carrito vacio</div>
      )}
      <div className="cartItems-down my-[100px] flex">
        <div
          className="cartItems-total mr-[200px] flex flex-col gap-10"
          style={{ flex: 1 }}
        >
          <h1>Total del Carrito</h1>
          <div>
            <div className="cartItems-total-item flex justify-between py-4">
              <p>Subtotal</p>
              <p>${totalItems}</p>
            </div>
            <div></div>
            <div className="cartItems-total-item flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div></div>
            <div className="cartItems-total-item flex justify-between py-4">
              <p>Total</p>
              <p>${totalItems}</p>
            </div>
            <div></div>
          </div>
          <button className="h-14 w-[262px] cursor-pointer bg-[#ff5a5a] text-lg font-semibold text-[#fff]">
            Proceder a Pagar
          </button>
        </div>
        <div
          className="cartItems-promocode text-lg font-medium"
          style={{ flex: 1 }}
        >
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="cartItems-promobox mt-4 flex h-14 w-[504px] items-center bg-[#eaeaea] pl-5">
            <input
              type="text"
              placeholder="promo code"
              className="h-12 w-[330px] bg-transparent text-lg"
            />
            <button className="h-14 w-[170px] cursor-pointer bg-black text-lg text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
