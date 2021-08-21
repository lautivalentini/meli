export default interface Item {
  id: React.Key,
  title: String,
  thumbnail: String,
  original_price: Number,
  price: Number,
  shipping: Shipping,
}

interface Shipping {
  free_shipping: Boolean,
  logistic_type: String,
}