export function formatPrice(price: Number): String {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};