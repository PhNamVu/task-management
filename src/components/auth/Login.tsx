import React from 'react'
import { Center, SimpleGrid, Heading, useMediaQuery, Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import LoginImage from '../../images/Login.svg'
import { LoginForm } from '../forms/Login'
import { Header } from '../Header'

export const Login = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <Box
        h="92vh"
      >
        <Header/>
        <SimpleGrid h="100%" columns={isWide ? 2 : 1}>
          {isWide && (
            <Center h="100%" alignItems="center">
              <object type="image/svg+xml" data={LoginImage} width="2000">
                svg-animation
              </object>
            </Center>
          )}
          <Center h="100%">
            <Box
              w="36rem"
              h={isWide ? 'relative' : '100vh'}
              borderRadius= '2em'
              mr={isWide ? '2em' : '0'}
              py="4rem"
              px="5rem"
            >
                <Heading as="h3" size="md" mb={10}>
                  Log in
                </Heading>
                <LoginForm />
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  )
}
