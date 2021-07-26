import React from 'react'
import { Form, Formik } from 'formik'
import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import * as Yup from 'yup'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { negativeToast, positiveToast } from '../../helpers/toaster'
import { StyledInput } from '../shared/StyledInput'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { fbase } from '../../hooks/use-auth'

export const ResetPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required.'),
      })}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await fbase.auth().sendPasswordResetEmail(values.email)
          positiveToast({
            title: 'Request successfully',
            description: 'Please check your email',
          })
          actions.setSubmitting(false)
        } catch (error) {
          negativeToast({ title: 'Request fail', description: error })
          actions.setSubmitting(false)
        }
      }}
    >
      {(formik: any) => (
        <Form>
          <Box mb={5}>
            Enter your email address below, and we&apos;ll send you a link to
            reset your password.
          </Box>
          <FormControl
            mb="0.5em"
            isRequired
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <StyledInput placeholder="Enter your email" name="email" />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <PrimaryBtn
            mt={5}
            width="100%"
            isLoading={formik.isSubmitting}
            type="submit"
            rightIcon={<ArrowForwardIcon />}
          >
            Reset your password
          </PrimaryBtn>
        </Form>
      )}
    </Formik>
  )
}
