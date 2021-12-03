import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import randomstring from 'randomstring'

import { negativeToast, positiveToast } from '../../helpers/toaster'
import { AddBoardValidation } from '../../helpers/validation'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { StyledInput } from '../shared/StyledInput'
import { GetBoardsDocument, usePostBoardMutation } from '../../generated/hooks'

interface Props {
  onClose: () => void
  workspaceId: string
}

export const AddBoardForm: React.FC<Props> = ({ onClose, workspaceId }) => {
  const [postBoard] = usePostBoardMutation()
  return (
    <Formik
      initialValues={{
        id: randomstring.generate(7),
        title: '',
        workspaceId,
      }}
      validationSchema={AddBoardValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await postBoard({
            variables: {
              object: {
                ...values,
              },
            },
            refetchQueries: [
              {
                query: GetBoardsDocument,
                variables: {
                  id: workspaceId,
                },
              },
            ],
          })
          onClose()
          positiveToast({
            title: 'Create successfully',
          })
          actions.setSubmitting(false)
        } catch (error) {
          negativeToast({
            title: 'Error. Please try again!',
          })
          actions.setSubmitting(false)
        }
      }}
    >
      {(formik: any) => (
        <Form>
          <FormControl
            mb="0.5em"
            isRequired
            isInvalid={formik.errors.title && formik.touched.title}
          >
            <FormLabel htmlFor="title">Title</FormLabel>
            <StyledInput placeholder="Enter your title" name="title" />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <PrimaryBtn
            mt={5}
            width="100%"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Create
          </PrimaryBtn>
        </Form>
      )}
    </Formik>
  )
}
