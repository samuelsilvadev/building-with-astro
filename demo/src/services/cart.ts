import { atom } from "nanostores";
import type { Product } from "../types/product";
import { useStore } from "@nanostores/preact";

export const cart = atom<
  Record<string, { product: Product; quantity: number }>
>({});

export const useGetProducts = () => {
  const $productsMap = useStore(cart);

  return Object.values($productsMap);
};

export const useAddProduct = () => {
  return {
    addProduct: (product: Product) => {
      const { id } = product;
      const existentProduct = cart.get()[id];

      cart.set({
        ...cart.get(),
        [id]: {
          product,
          quantity: existentProduct ? existentProduct.quantity + 1 : 1,
        },
      });
    },
  };
};

export const useRemoveProduct = () => {
  return {
    removeProduct: (id: string) => {
      const allProducts = cart.get();

      delete allProducts[id];

      cart.set({ ...allProducts });
    },
  };
};
