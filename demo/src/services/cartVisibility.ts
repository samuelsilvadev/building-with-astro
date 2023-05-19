import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";

const isCartOpen = atom(false);

export const useCartVisibility = () => {
  const $isCartOpen = useStore(isCartOpen);

  return {
    isOpen: $isCartOpen,
    toggleCart() {
      isCartOpen.set(!isCartOpen.get());
    },
  };
};
