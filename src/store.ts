import { create } from "zustand";
import all_product from "@/components/Assets/all_product";
import type { StaticImageData } from "next/image";

type State = {
  firstName: string;
  lastName: string;
  products: typeof all_product;
  cart: {
    id: number;
    name: string;
    category: string;
    image: StaticImageData;
    new_price: number;
    old_price: number;
    cantidad: number;
  }[];
};

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
  addToCart: (id: number) => void;
  removeToCart: (id: number) => void;
};

export const useShopperStore = create<State & Action>((set, get) => ({
  firstName: "",
  lastName: "",
  products: all_product,
  cart: [],
  addToCart: (id) => {
    const existCart = get().cart.find((item) => item.id === id);
    const existProduct = get().products.find((item) => item.id === id);
    if (existCart) {
      set((state) => ({
        cart: state.cart.map((updProd) => {
          if (updProd.id === existCart.id) {
            return { ...updProd, cantidad: existCart.cantidad + 1 };
          } else {
            return updProd;
          }
        }),
      }));
    } else {
      if (existProduct) {
        set((state) => ({
          cart: [...state.cart, { ...existProduct, cantidad: 1 }],
        }));
      }
    }
  },
  removeToCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((filItem) => filItem.id !== id),
    })),
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));
