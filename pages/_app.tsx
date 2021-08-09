import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '../components/Navbar'

import theme from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <title>Mercado Libre Argentina</title>
    </Head>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
export default App
