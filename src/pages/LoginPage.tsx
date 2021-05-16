import React from 'react'
import { Center, SimpleGrid, Heading, useMediaQuery, useColorModeValue } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import LoginImage from '../images/Login.svg'
import { LoginForm } from '../components/forms/Login'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export const LoginPage = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <SimpleGrid columns={isWide ? 2 : 1} bg={useColorModeValue('#C5FFF8', "#1A202C")}>
        {isWide && (
          <Center h="100vh" alignItems="center">
            <object type="image/svg+xml" data={LoginImage} width="2000">
              svg-animation
            </object>
          </Center>
        )}
        <Center>
          <div
            style={{
              width: '36rem',
              height: isWide ? '70vh' : '100vh',
              borderRadius: '2em',
              backgroundColor: useColorModeValue('rgba(254, 255, 255, 0.6)', "#1A202C") ,
              marginRight: isWide ? '2em' : '0',
            }}
          >
            <div
              style={{
                margin: '4rem 5rem',
              }}
            >
              <ColorModeSwitcher/>
              <Heading as="h3" size="md" mb={10}>
                Log in
              </Heading>
              <LoginForm />
            </div>
          </div>
        </Center>
      </SimpleGrid>
    </>
  )
}
