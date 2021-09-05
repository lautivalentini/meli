import { Stack, Box, Text } from "@chakra-ui/react"

import ProductType from "../../types/Product"

import { formatPrice } from '../../utils/index'

const Product = ({ 
  id, 
  title, 
  thumbnail, 
  original_price,
  price,
  shipping,
}: ProductType) => {
  
  return (
    <Box 
      width="280px" 
      height="440px" 
      borderRadius="4px"
      margin="10px"
      backgroundColor="white"
      boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%)"
    >
      <Box 
        height="280px" 
        width="100%" 
        backgroundSize="contain" 
        backgroundImage={`url(${thumbnail})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="top"
      />
      <Stack 
        paddingX={6} 
        paddingY={4}
      >
        <Text fontSize="24px" fontWeight="500">{formatPrice(price)}</Text>
        <Text fontSize="14px">{title}</Text>
      </Stack>
    </Box>
  )
}

export default Product