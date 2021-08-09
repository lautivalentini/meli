import { useRef, useState } from "react"

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { Box, Stack, Image, IconButton } from "@chakra-ui/react"

const images = [
  "/images/carrousel/clothes.webp",
  "/images/carrousel/games.webp",
  "/images/carrousel/gaming.webp",
  "/images/carrousel/play.webp",
]

const Carrousel: React.FC = () => {
  const [showArrows, setShowArrows] = useState<Boolean>(false)
  const [imagePosition, setImagePosition] = useState<Number>(1)
  const scroller = useRef<HTMLDivElement>(null)

  function handleChangeArrows(value: Boolean) {
    setShowArrows(value)
  }

  function scrollTo(position: String) {
    const width = scroller?.current?.clientWidth || 0
    const item = scroller.current
    if (position === 'rigth') {
      if (imagePosition === images.length) {
        item?.scroll({ left: 0, top: 0, behavior: 'smooth' })
        setImagePosition(1)
      }
      if (imagePosition <= images.length -1) {
        item?.scroll({ left: width * Number(imagePosition), top: 0, behavior: 'smooth' })
        setImagePosition(Number(imagePosition) + 1)
      }
    } else if (position === 'left' && imagePosition >= 1) {
      if (imagePosition === 1) {
        item?.scroll({ left: (width * images.length - 1), top: 0, behavior: 'smooth' })
        setImagePosition(images.length)
      } else {
        item?.scroll({ left: (width * (Number(imagePosition) - 1)) - width, top: 0, behavior: 'smooth' })
        if (imagePosition > 1) {
          setImagePosition(Number(imagePosition) - 1)
        }
      }
    }
  }
  
  return (
    <Box
      onMouseOver={() => handleChangeArrows(true)} 
      onMouseLeave={() => handleChangeArrows(false)}
    >
      <Box display="flex" alignItems="center" justifyContent="center" maxW="1600px" margin="auto">
        {showArrows && (
          <IconButton 
            position="absolute" 
            paddingY={10} 
            paddingX={4} 
            boxShadow="0 2px 4px 0 rgb(0 0 0 / 19%)" 
            borderRadius={2} 
            bg="white" 
            color="#5697fa" 
            left="0" 
            aria-label="Left arrow" 
            icon={<ArrowLeftIcon />}
            onClick={() => scrollTo('left')}
          />
        )}
        <Stack 
          direction="row" 
          alignItems="center" 
          overflowX="scroll" 
          ref={scroller} 
          spacing={0} 
          sx={{ 
            "::-webkit-scrollbar" : {
              display: 'none'
            }
          }}
         >
          {images.map((item, index) => (
            <Image 
              key={index} 
              src={item} 
              alt="Imagen carrousel" 
              width="100%"
            />
          ))}
        </Stack>
        {showArrows && (
          <IconButton 
            position="absolute" 
            paddingY={10} 
            paddingX={4} boxShadow="0 2px 4px 0 rgb(0 0 0 / 19%)" 
            borderRadius={2} 
            bg="white" 
            color="#5697fa" 
            right="0" 
            aria-label="Right arrow" 
            icon={<ArrowRightIcon />}
            onClick={() => scrollTo('rigth')}
          />
        )}
      </Box>
    </Box>
  )
}

export default Carrousel