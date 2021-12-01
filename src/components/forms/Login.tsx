import React from 'react'
import { Form, Formik } from 'formik'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  Divider,
  Stack,
} from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

import { LoginSchemaValidation } from '../../helpers/validation'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { StyledInput } from '../shared/StyledInput'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { fbase } from '../../hooks/use-auth'

export const LoginForm = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const handelSignInWithGoogle = async () => {
    const provider = new fbase.auth.GoogleAuthProvider()
    await fbase
      .auth()
      .signInWithPopup(provider)
      .then((data) => {
        if (data) {
          positiveToast({
            title: 'Login successful',
          })
        }
      })
      .catch((error) => {
        if (error.code !== 'auth/popup-closed-by-user')
          negativeToast({ title: 'Login fail', description: error.message })
      })
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchemaValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await fbase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
        } catch (error) {
          negativeToast({ title: 'Login fail' })
        }
        actions.setSubmitting(false)
      }}
    >
      {(formik: any) => (
        <Form>
          <FormControl
            mb="0.5em"
            isRequired
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <StyledInput placeholder="Enter your email" name="email" />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <StyledInput
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter your password"
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  variant="ghost"
                >
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Flex justifyContent="flex-end" mt={5}>
            <NavLink to="/auth/forgot-password">
              <Text fontSize="md" _hover={{ textDecoration: 'underline' }}>
                Forgot Password ?
              </Text>
            </NavLink>
          </Flex>
          <PrimaryBtn
            mt={5}
            width="100%"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Sign In
          </PrimaryBtn>

          <Stack direction="row" py={3}>
            <Divider orientation="horizontal" pt={3} />
            <Text>or</Text>
            <Divider orientation="horizontal" pt={3} />
          </Stack>

          <Button
            onClick={handelSignInWithGoogle}
            type="button"
            width="100%"
            variant="outline"
            leftIcon={<Image src="/assets/google-icon.svg" h={5} w={5} />}
          >
            Sign in with Google
          </Button>
        </Form>
      )}
    </Formik>
  )
}
