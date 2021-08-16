import { Container, Stack, Image, Center, Divider } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Card from "../Card"

const items = [
  { image: '/images/credit-card.svg', title: 'Tarjeta de crédito', subtitle: 'Ver promociones bancarias' },
  { image: '/images/debit-card.svg', title: 'Tarjeta de débito', subtitle: 'Ver más' },
  { image: '/images/mercado.svg', title: 'Cuotas sin tarjeta', subtitle: 'Conocé Mercado Crédito' },
  { image: '/images/payment.svg', title: 'Efectivo', subtitle: 'Ver más' },
]

interface Items {
  image: String,
  title: String,
  subtitle: String
}

const Cards: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState<Items[]>(items)

  useEffect(() => {
    const mediaQueries = {
      sm: window.matchMedia('(max-width: 500px)'),
      xs: window.matchMedia('(min-width: 501px) and (max-width: 1000px)'),
    }
    if (mediaQueries.sm.matches) {
      setItemsToShow([items[0]])
    } else if (mediaQueries.xs.matches) {
      setItemsToShow([items[0], items[1]])
    } else {
      setItemsToShow(items)
    }
  }, [])

  return (
    <Container width="95%" maxW="container.xl" paddingY="40px" cursor="pointer">
        <Stack 
          direction='row' 
          alignItems='center' 
          justifyContent="space-between" 
          bg="white" 
          overflow="hidden"
          spacing={0}
          paddingX={8}
          borderRadius={4}
          boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%)"
        >
          {itemsToShow.map((item, index) => (
            <Card 
              key={index} 
              image={item.image} 
              title={item.title} 
              subtitle={item.subtitle} 
            />
          ))}
          <Center height="100%">
            <Divider paddingRight={4} orientation="vertical" height="90px" />
            <Image src="/images/view-more.svg" width="50px" height="50px" alt="View More" />
          </Center>
        </Stack>

    </Container>
  )
}

export default Cards