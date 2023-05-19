import type { Product } from "../types/product";
import { useAddProduct } from "../services/cart";

type Props = Product;

const CartButton = (props: Props) => {
  const { addProduct } = useAddProduct();

  const handleAddToCart = () => {
    addProduct(props);
  };

  return (
    <button
      onClick={handleAddToCart}
      class="text-black focus:ring-2 focus:outline-none text-sm px-5 py-2.5 text-center bg-yellow-400 hover:bg-yellow-600 focus:ring-white"
    >
      Add to cart
    </button>
  );
};

export default CartButton;
