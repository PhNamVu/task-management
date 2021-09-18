import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'

import { negativeToast, positiveToast } from '../../helpers/toaster'
import { AddWorkspaceValidation } from '../../helpers/validation'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { StyledInput } from '../shared/StyledInput'
import { StyledTextArea } from '../shared/StyledTextArea'

import { useAuth } from '../../hooks/use-auth'
import {
  GetWorkspacesDocument,
  usePostUserWorkspaceMutation,
  usePostWorkspaceMutation,
} from '../../generated/hooks'

interface Props {
  onClose: () => void
}

export const AddWorkspaceForm: React.FC<Props> = ({ onClose }) => {
  const [postWorkspace] = usePostWorkspaceMutation()
  const [postUserWorkspace] = usePostUserWorkspaceMutation()
  const { state }: any = useAuth()
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
      }}
      validationSchema={AddWorkspaceValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          const res = await postWorkspace({
            variables: {
              object: {
                ...values,
              },
            },
          })
          await postUserWorkspace({
            variables: {
              object: {
                userId: state.user.uid,
                workspaceId: res.data?.insert_workspaces?.returning[0].id,
              },
            },
            update: (cache, { data }) => {
              const existingWorkspaces: any = cache.readQuery({
                query: GetWorkspacesDocument,
                variables: {
                  userId: state.user.uid,
                },
              })

              cache.writeQuery({
                query: GetWorkspacesDocument,
                variables: {
                  userId: state.user.uid,
                },
                data: {
                  user_workspace: [
                    ...existingWorkspaces.user_workspace,
                    data?.insert_user_workspace?.returning[0].workspace,
                  ],
                },
              })
            },
            // refetchQueries: [
            //   {
            //     query: GetWorkspacesDocument,
            //     variables: {
            //       userId: state.user.uid,
            //     },
            //   },
            // ],
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
          <FormControl
            mb="0.5em"
            isRequired
            isInvalid={formik.errors.description && formik.touched.description}
          >
            <FormLabel htmlFor="description">Description</FormLabel>
            <StyledTextArea
              placeholder="Enter your description"
              name="description"
            />
            <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
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
