import React from 'react'
import {
  Center,
  Heading,
  Box,
  Image,
  Flex,
  Button,
  Text,
  chakra,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { IoIosRefresh } from 'react-icons/io'
import { RiRefreshLine } from 'react-icons/ri'

import { PrimaryBtn } from '../shared/PrimaryBtn'
import { useAuth } from '../../hooks/use-auth'
import { negativeToast, positiveToast } from '../../helpers/toaster'

export const VerifyEmail = () => {
  const navigate = useNavigate()
  const [refresh, setRefresh] = React.useState(false)
  const {
    state: { user },
    signout,
  }: any = useAuth()
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <Center alignContent="center">
        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={5}
          h="100%"
        >
          <Image src="/assets/mailbox.svg" h={200} />

          <Box>
            <Heading as="h3" size="md" color="steal.500" my={5}>
              Verification link sent!
            </Heading>
            <Text size="lg" fontWeight={400}>
              We emailed a verification link to{' '}
              <chakra.span fontWeight={600}>phnamvu@gmail.com</chakra.span>
              <br />
              Check your email for a link to verify your email address.
            </Text>

            <Box mt={10}>
              <Text size="lg">Didn’t receive the email?</Text>
              <Flex alignItems="center">
                <Text>Check your spam folder or</Text>
                <Button
                  ml={2}
                  variant="link"
                  leftIcon={<IoIosRefresh />}
                  color="facebook"
                  onClick={async () => {
                    try {
                      await user.sendEmailVerification()
                      positiveToast({
                        title: 'Send successful',
                        description:
                          'You will receive an email with instructions about how to confirm your account in a few minutes.',
                      })
                    } catch (error) {
                      negativeToast({
                        title: 'Send again fail',
                        description: error.message,
                      })
                    }
                  }}
                >
                  Send again
                </Button>
              </Flex>
            </Box>

            <Flex w="100%" mt={5}>
              <PrimaryBtn
                isLoading={refresh}
                w="100%"
                mt={2}
                onClick={() => {
                  setRefresh(true)
                  window.location.reload()
                }}
                rightIcon={<RiRefreshLine />}
              >
                I have verified the email. Click to refresh
              </PrimaryBtn>
            </Flex>

            <Flex w="100%" justifyContent="space-between" mt={3}>
              <Button
                size="sm"
                variant="link"
                onClick={() => {
                  navigate('/')
                }}
              >
                Back to Home
              </Button>
              <Button
                size="sm"
                variant="link"
                onClick={signout}
                _hover={{color: "red.500"}}
              >
                Log out
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </>
  )
}
