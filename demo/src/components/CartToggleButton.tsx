import { useCartVisibility } from "../services/cartVisibility";

const CartToggleButton = ({ label = "Cart" }: { label?: string }) => {
  const { toggleCart } = useCartVisibility();

  return (
    <button
      class="text-black focus:ring-1 focus:outline-none text-lg py-2 px-10 text-center bg-yellow-400 hover:bg-yellow-600 focus:ring-white"
      onClick={toggleCart}
    >
      {label}
    </button>
  );
};

export default CartToggleButton;
