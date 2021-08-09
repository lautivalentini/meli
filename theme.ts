import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: '"Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
        backgroundColor: '#ebebeb',
      },
    },
  },
})

export default theme