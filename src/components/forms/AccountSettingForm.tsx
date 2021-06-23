import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { UsersDocument, useUpdateProfileMutation } from '../../generated/hooks'

import { negativeToast, positiveToast } from '../../helpers/toaster'
import { SetUpAccountValidation } from '../../helpers/validation'
import { useAuth } from '../../hooks/use-auth'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { StyledInput } from '../shared/StyledInput'

interface User {
  id?: string | null | undefined
  email?: string | null | undefined
  firstName?: string | null | undefined
  lastName?: string | null | undefined
}

interface AccountSettingFormProp {
  user: User | null | undefined
}

export const AccountSettingForm: React.FC<AccountSettingFormProp> = ({
  user,
}) => {
  const { state, signout }: any = useAuth()

  const [updateProfile] = useUpdateProfileMutation()
  return (
    <Formik
      initialValues={{
        firstName: user?.firstName ? user.firstName : '',
        lastName: user?.lastName ? user.lastName : '',
        email: user?.email ? user.email : '',
      }}
      validationSchema={SetUpAccountValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await updateProfile({
            variables: {
              id: user?.id,
              object: {
                ...values,
              },
            },
            refetchQueries: [
              {
                query: UsersDocument,
                variables: {
                  id: user?.id,
                },
              },
            ],
          })
          await state.user.updateProfile({
            displayName: `${values.firstName} ${values.lastName}`,
          })
          positiveToast({
            title: 'Update successfully',
          })
          actions.setSubmitting(false)
        } catch (error) {
          negativeToast({
            title: 'Error. Please try again!',
            description: error.message,
          })
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
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <StyledInput
                placeholder="Enter your first name"
                name="firstName"
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl
              w="47%"
              mb="0.5em"
              isRequired
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            >
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <StyledInput placeholder="Enter your last name" name="lastName" />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
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
            Update
          </PrimaryBtn>
          <Flex w="100%" justifyContent="flex-end" mt={3}>
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
  )
}
