import Image from 'next/image'

import { Stack, Text } from "@chakra-ui/react"

interface Props {
  image: String,
  title: String,
  subtitle: String,
}

const Card: React.FC<Props> = ({ image, title, subtitle }) => {
  return (
      <Stack direction="row" alignItems="center">
        <Image src={`${image}`} alt={`${title}`} width="50" height="50" />
        <Stack spacing={0}>
          <Text fontSize="18px">{title}</Text>
          <Text fontSize="12px" color="#3A83FA">{subtitle}</Text>
        </Stack>
      </Stack>
  )
}

export default Card