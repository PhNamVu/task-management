import React from 'react'
import {
  Image,
  Center,
  SimpleGrid,
  Heading,
  useMediaQuery,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import { Header } from '../Header'
import { SignUpForm } from '../forms/SignUp'


export const SignUp = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Box h="92vh">
        <Header />
        <SimpleGrid
          h="100%"
          columns={isWide ? 2 : 1}
          bg={useColorModeValue('white', '#1A202C')}
        >
          {isWide && (
            <Center h="100%" w="80%" ml={10}>
              <Image src="/assets/sign-up.svg" />
            </Center>
          )}
          <Center h="100%">
            <Box
              w="36rem"
              h={isWide ? 'relative' : '100vh'}
              borderRadius="2em"
              mr={isWide ? '2em' : '0'}
              py="4rem"
              px="5rem"
            >
              <Heading as="h3" size="md" mb={10}>
                Sign up
              </Heading>
              <SignUpForm />
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  )
}
