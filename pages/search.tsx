import { GetServerSideProps } from "next"

import Product from "../components/Product"

interface Products {
  products: Item[]
}

interface Item {
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

const Search = ({ products }: Products) => {
  console.log(products)
  return (products || []).map(product => {
    const item = {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      original_price: product.original_price,
      price: product.price,
      shipping: product.shipping,
    }
    return <Product key={product.id} {...item} />
  })
}

export default Search

export const getServerSideProps: GetServerSideProps = async({ query }) => {
  const { item } = query
  const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=${item}`;
  
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: { products: data.results },
  }
}
