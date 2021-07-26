import React from 'react'
import {
  Center,
  Heading,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useMutation, gql } from '@apollo/client'

import { SetUpAccountValidation } from '../../helpers/validation'
import { StyledInput } from '../shared/StyledInput'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { fbase, useAuth } from '../../hooks/use-auth'
import { negativeToast, positiveToast } from '../../helpers/toaster'

export const SetupAccount = () => {
  const navigate = useNavigate()
  const {
    state: { user },
    signout,
  }: any = useAuth()
  const getFirstName = (name: string) => {
    const arr = name.split(' ')
    if (arr.length === 1) {
      return arr[0]
    }
    return arr.slice(0, -1).join(' ')
  }

  const getLastName = (name: string) => {
    const arr = name.split(' ')
    return arr.slice(-1).join(' ')
  }

  const [userSetup] = useMutation(gql`
    mutation UserSetup($input: UserSetupInput!) {
      userSetup(input: $input) {
        status
        statusCode
        message
      }
    }
  `)
  return (
    <>
      <Helmet>
        <title>Set up account</title>
      </Helmet>
      <Center h="100vh">
        <Flex
          h="50vh"
          w="100%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          mt={5}
        >
          <Box>
            <Heading as="h3" size="md" color="steal.500" my={5}>
              Set up account
            </Heading>
            <Formik
              initialValues={{
                firstName: user.displayName
                  ? getFirstName(user.displayName)
                  : '',
                lastName: user.displayName ? getLastName(user.displayName) : '',
                email: user.email,
              }}
              validationSchema={SetUpAccountValidation}
              onSubmit={async (values, actions) => {
                try {
                  actions.setSubmitting(true)
                  const token: string = await user.getIdToken()

                  const dataRes = await userSetup({
                    variables: {
                      input: {
                        token,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        role: 'USER',
                      },
                    },
                  })
                  if (
                    dataRes &&
                    dataRes.data.userSetup.status === 'success'
                  ) {
                    positiveToast({
                      title: 'Sign up successfully',
                    })
                    await user.updateProfile({
                      displayName: `${values.firstName} ${values.lastName}`,
                    })
                    fbase
                      .auth()
                      .currentUser?.getIdToken(true)
                      .then(() => {
                        return window.location.reload()
                      })
                      .catch((error) => {
                        negativeToast({
                          title: 'Firebase error',
                          description: error,
                        })
                      })
                  }
                  actions.setSubmitting(false)
                } catch (error) {
                  negativeToast({ title: 'Error. Please try again!', description: error.message})
                  actions.setSubmitting(false)
                }
              }}
            >
              {(formik: any) => (
                <Form>
                  <Flex justifyContent="space-between">
                    <FormControl
                      w="47%"
                      mb="0.5em"
                      isRequired
                      isInvalid={
                        formik.errors.firstName && formik.touched.firstName
                      }
                    >
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <StyledInput
                        placeholder="Enter your first name"
                        name="firstName"
                      />
                      <FormErrorMessage>
                        {formik.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl
                      w="47%"
                      mb="0.5em"
                      isRequired
                      isInvalid={
                        formik.errors.lastName && formik.touched.lastName
                      }
                    >
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <StyledInput
                        placeholder="Enter your last name"
                        name="lastName"
                      />
                      <FormErrorMessage>
                        {formik.errors.lastName}
                      </FormErrorMessage>
                    </FormControl>
                  </Flex>

                  <FormControl
                    mb="0.5em"
                    isRequired
                    isInvalid={formik.errors.email && formik.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <StyledInput
                      placeholder="Enter your email"
                      name="email"
                      isReadOnly
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>

                  <PrimaryBtn
                    mt={5}
                    width="100%"
                    isLoading={formik.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </PrimaryBtn>
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
                      _hover={{ color: 'red.500' }}
                    >
                      Log out
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Center>
    </>
  )
}
