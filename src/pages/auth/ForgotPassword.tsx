import React from 'react'
import { Center, SimpleGrid, Heading, useMediaQuery, Box, useColorModeValue} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'


import { Header } from '../../components/Header'
import { ResetPasswordForm } from '../../components/forms/ResetPassword'

export const ForgotPasswordPage = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Helmet>
        <title>Forgot password</title>
      </Helmet>
      <Box
        h="92vh"
      >
        <Header/>
        <SimpleGrid h="100%" columns={1}>
          <Center h="100%">
            <Box
              w="36rem"
              h={isWide ? 'relative' : '100vh'}
              borderRadius= '2em'
              py="4rem"
              px="5rem"
              boxShadow= {useColorModeValue("rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px","white 0px 1px 3px, white 0px 1px 2px")}
              
            >
                <Heading as="h3" size="md" mb={10}>
                    Forgot password
                </Heading>
                <ResetPasswordForm  />
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  )
}