export const formatPrice = (value: number) => {
  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  }).format(value);

  return formattedPrice;
};
