import { Stack, Box, Text } from "@chakra-ui/react"

interface Product {
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

const Product = ({ 
  id, 
  title, 
  thumbnail, 
  original_price,
  price,
  shipping,
}: Product) => {
  return (
    <Box bg="silver" maxW="280px" margin="10px 0">
      <Box 
        height="280px" 
        width="100%" 
        backgroundSize="contain" 
        backgroundImage={`url(${thumbnail})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      ></Box>
      <Stack>
        <Text>{price}</Text>
        <Text>{title}</Text>
      </Stack>
    </Box>
  )
}

export default Product