import { useGetProducts, useRemoveProduct } from "../services/cart";
import { useCartVisibility } from "../services/cartVisibility";
import { formatPrice } from "../utils/formatPrice";
import CartToggleButton from "./CartToggleButton";

const handleNavigateToCheckout = () => {
  console.log(
    "%cIdeally this would take you to checkout 😓",
    "background-color: rgb(250 204 21); padding: 10px; color: black; font-weight: bold;"
  );
};

const Cart = () => {
  const { isOpen, toggleCart } = useCartVisibility();
  const products = useGetProducts();
  const { removeProduct } = useRemoveProduct();

  if (!isOpen) {
    return null;
  }

  const totalPrice = products.reduce((finalPrice, { product, quantity }) => {
    return finalPrice + product.price * quantity;
  }, 0);

  return (
    <aside class="bg-white h-screen w-screen max-w-md fixed right-0 top-0 flex flex-col z-10">
      <div class="flex items-center justify-between h-20 px-4 border-b border-gray-200">
        <h2 class="text-2xl font-medium text-gray-900">Cart</h2>
        <CartToggleButton label="Close Cart" />
      </div>
      <ul class="-my-6 divide-y divide-gray-200 px-4 mt-8 flex-grow">
        {products.map(({ product: { image, name, price, id }, quantity }) => (
          <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={image}
                alt={name}
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">{name}</a>
                  </h3>
                  <p class="ml-4">{formatPrice(price)}</p>
                </div>
              </div>
              <div class="flex flex-1 items-end justify-between text-sm">
                <p class="text-gray-500">Qty {quantity}</p>
                <div class="flex">
                  <button
                    type="button"
                    class="font-medium text-black hover:text-yellow-400"
                    onClick={() => removeProduct(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{formatPrice(totalPrice)}</p>
        </div>
        <div class="mt-6">
          <button
            disabled={products.length === 0}
            type="button"
            class="w-full bg-zinc-950 px-6 py-3 font-medium text-base text-white enabled:hover:text-black enabled:hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleNavigateToCheckout}
          >
            Checkout
          </button>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p class="mr-1">or</p>
          <button
            type="button"
            class="font-medium text-black"
            onClick={toggleCart}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
