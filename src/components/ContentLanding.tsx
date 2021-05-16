import React from 'react'
import {
  Center,
  SimpleGrid,
  Heading,
  useMediaQuery,
  Box,
  Flex,
  useColorModeValue,
  Image
} from '@chakra-ui/react'


export const ContentLanding = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')

  return (
    <Box 
      w="100%"
      h="100vh"
      bg="#FFD200"
    >
    <Box
      w="100%"
      h="100vh"
      bg={useColorModeValue('white', "#1A202C")}
      clipPath="polygon(0 0, 100% 0, 100% 77%, 81% 100%, 0 100%, 0% 50%)"
    >
      <Box 
        w="100%" 
        h="92vh"
      >
        <SimpleGrid h="100%" columns={isWide ? 2 : 1}>
          <Center h="100%">
            <Flex
              justifyContent={ isWide ? "flex-start" : "center" }
              w="100%"
              mr={isWide ? '2em' : '0'}
              py="4rem"
              px="5rem"
            >
              <Heading as="h3" size="xl" mb={10}>
                We help you <br/> orginize your work
              </Heading>
            </Flex>
          </Center>
          <Center h="100%" alignItems="center">
            <Image src="/assets/landing.svg"/>
          </Center>
        </SimpleGrid>
        
      </Box>
      
    </Box>
    </Box>
  )
}
