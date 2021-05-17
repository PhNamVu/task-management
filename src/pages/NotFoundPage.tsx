import React from 'react'
import {
  Center,
  Heading,
  useMediaQuery,
  Box,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const NotFoundPage = () => {
  const [isWide] = useMediaQuery('(min-width: 800px)')
  const navigate = useNavigate()
  return (
    <>
      <Center>
        <Box
          w={isWide ? '55vw' : '100vw'}
          borderRadius="2em"
          py="4rem"
          px="5rem"
        >
          <Image src="/assets/404.svg" />
          <Heading as="h3" size="md" color="teal.500" mt={2} mb={2}>
            Page Not Found
          </Heading>
          <Heading as="h3" size="lg">
            Sorry, but this page has vanished.
            <br />
            Maybe the aliens took it.
          </Heading>
          <Flex w="100%" justifyContent="center" mt={5}>
            <Button
              mt={2}
              ml={2}
              bg="teal.500"
              onClick={() => navigate('/')}
              color="white"
              leftIcon={<ArrowBackIcon/>}
            >
              Back to home
            </Button>
          </Flex>
        </Box>
      </Center>
    </>
  )
}
