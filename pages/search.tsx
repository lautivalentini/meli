import { Box, Flex  } from "@chakra-ui/react"
import { GetServerSideProps } from "next"

import Product from "../components/Product"

import Products from "../types/Products"

const Search = ({ products }: Products) => {
  console.log(products)
  return (
    <Box width="95%" maxW="container.xl" margin="auto">
      <Flex spacing={0} direction="row" flexWrap="wrap" justifyContent="center">
        {(products || []).map(product => {
          const item = {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            original_price: product.original_price,
            price: product.price,
            shipping: product.shipping,
          }
          return <Product key={product.id} {...item} />
        })}
      </Flex>
    </Box>
  )
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
