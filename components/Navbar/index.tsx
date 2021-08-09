/* eslint-disable react/no-children-prop */
import { Box, Container, Input, Image, InputGroup, InputRightAddon, Stack, Center, Divider } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

const Navbar: React.FC = () => {
  return (
    <Box bg="#fff159" width="100%" paddingY={3} boxShadow="0 1px 0 0 rgb(0 0 0 / 10%)">
      <Box width="95%" maxW="container.xl" margin="auto">
        <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center" spacing={{base: 0, md: 2}}>
          <Image 
            height="35px" 
            src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628127971/logo_pzhmiv.png" 
            alt="Logo Mercado Libre" 
            display={{base: 'none', md: 'block'}}
          />
          <Image 
            height="35px" 
            src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628128421/_113026650_1-1_adpbpf.png" 
            alt="Logo Mercado Libre"
            display={{base: 'block', md: 'none'}}
            style={{ marginRight: "5px" }}
          />
          <InputGroup maxW="800px" marginLeft="2px">
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
            />
            <Center height="100%">
              <Divider orientation="vertical" height="30px" />
            </Center>
             <InputRightAddon 
              bg="white" 
              borderRadius={2} 
              border="none"
              color="#666"
              boxShadow="0 1px 0 0 rgba(0,0,0,.2)"
              cursor="pointer"
              children={<SearchIcon />}
            />
          </InputGroup>
          <Image
            height="35px" 
            src="https://res.cloudinary.com/dbmjbmxo6/image/upload/v1628117514/disney_pfkl03.webp" 
            alt="Logo Disney +"
            display={{ base: 'none', md: 'block' }}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar