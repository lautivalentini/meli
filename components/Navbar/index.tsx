/* eslint-disable react/no-children-prop */
import React, { useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'

import { 
  Box, 
  Input, 
  Image, 
  InputGroup, 
  InputRightAddon, 
  Stack, 
  Center, 
  Divider, 
  Link as ChakraLink 
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'


const Navbar: React.FC = () => {
  const [search, setSearch] = useState<String>('')
  const router = useRouter()

  function onSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (search === '') return
    router.push(`/search?item=${search}`)
  }

  return (
    <Box bg="#fff159" width="100%" paddingY={3} boxShadow="0 1px 0 0 rgb(0 0 0 / 10%)">
      <Box width="95%" maxW="container.xl" margin="auto">
        <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center" spacing={{base: 0, md: 2}}>
          <ChakraLink as={Link} href="/">
            <Image 
              height="35px" 
              src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628127971/logo_pzhmiv.png" 
              alt="Logo Mercado Libre"
              cursor="pointer"
              display={{base: 'none', md: 'block'}}
            />
          </ChakraLink>
          <ChakraLink href="/" as={Link}>
            <Image 
              height="35px" 
              src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628128421/_113026650_1-1_adpbpf.png" 
              alt="Logo Mercado Libre"
              display={{base: 'block', md: 'none'}}
              cursor="pointer"
              style={{ marginRight: "5px" }}
            />
          </ChakraLink>
            <InputGroup as="form" onSubmit={onSubmit} maxW="800px" marginLeft="2px">
              <Input
                maxLength={120}
                autoFocus
                variant="filled" 
                borderRadius={2} 
                bg="white" 
                placeholder="Buscar productos, marcas y más..."
                width="100%"
                maxW="800px"
                color="#333"
                fontSize="15px"
                border="none"
                boxShadow="0 1px 0 0 rgba(0,0,0,.2)"
                _hover={{ bg: "white" }}
                _focus={{ bg: 'white', outline: 'none' }}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Center height="40px" alignItems="center">
                <Divider orientation="vertical" height="30px" />
              </Center>
              <InputRightAddon
                as="button"
                bg="white" 
                borderRadius={2} 
                border="none"
                color="#666"
                boxShadow="0 1px 0 0 rgba(0,0,0,.2)"
                cursor="pointer"
                children={<SearchIcon />}
                type="submit"
              />
            </InputGroup>
          <ChakraLink href="/" as={Link}>
            <Image
              height="35px" 
              src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628117514/disney_pfkl03.webp" 
              alt="Logo Disney +"
              cursor="pointer"
              display={{ base: 'none', md: 'block' }}
            />
          </ChakraLink>
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar