import React from 'react'
import { Form, Formik } from 'formik'
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { SignUpSchemaValidation } from '../../helpers/validation'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { StyledInput } from '../shared/StyledInput'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { fana, fbase } from '../../hooks/use-auth'

export const SignUpForm = () => {
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
        passwordConfirmation: '',
      }}
      validationSchema={SignUpSchemaValidation}
      onSubmit={async (values) => {
        try {
          const userRes = await fbase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
          if (userRes) {
            await userRes.user?.sendEmailVerification()
            fana.setUserId(userRes.user?.uid as string)
          }
        } catch (error) {
          negativeToast({ title: 'Login fail' })
        }
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
            mb="0.5em"
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

          <FormControl
            isRequired
            isInvalid={
              formik.errors.passwordConfirmation &&
              formik.touched.passwordConfirmation
            }
          >
            <FormLabel htmlFor="passwordConfirmation">
              Confirm Password
            </FormLabel>
            <InputGroup size="md">
              <StyledInput
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Confirm your password"
                name="passwordConfirmation"
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

            <FormErrorMessage>
              {formik.errors.passwordConfirmation}
            </FormErrorMessage>
          </FormControl>

          <PrimaryBtn
            mt={5}
            width="100%"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Create Account
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
            Continue with Google
          </Button>
        </Form>
      )}
    </Formik>
  )
}
