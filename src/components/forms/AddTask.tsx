import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Select,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { Form, Formik } from 'formik'
import randomstring from 'randomstring'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'

import '../../style/date-picker.css'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { AddTaskValidation } from '../../helpers/validation'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { StyledInput } from '../shared/StyledInput'
import { StyledTextArea } from '../shared/StyledTextArea'
import { GetTasksDocument, usePostTaskMutation } from '../../generated/hooks'
import { StyledSelect } from '../shared/StyledSelect'

interface Props {
  onClose: () => void
  code: number
}

export const AddTaskForm: React.FC<Props> = ({ onClose, code }) => {
  const [postTask] = usePostTaskMutation()
  const { id: boardId } = useParams()

  return (
    <Formik
      initialValues={{
        id: randomstring.generate(5),
        priority: 'medium',
        title: '',
        description: '',
        startDate: new Date(),
        dueDate: new Date(),
        boardId,
        code,
      }}
      validationSchema={AddTaskValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await postTask({
            variables: {
              object: {
                ...values,
              },
            },
            refetchQueries: [
              {
                query: GetTasksDocument,
                variables: {
                  boardId,
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
            description: error.message,
          })
          actions.setSubmitting(false)
        }
      }}
    >
      {(formik: any) => (
        <Form>
          <Flex alignItems="center" justifyContent="space-between">
            <FormControl
              isRequired
              isInvalid={formik.errors.title && formik.touched.title}
              w="80%"
              mb="0.5em"
            >
              <FormLabel htmlFor="title">Title</FormLabel>
              <StyledInput placeholder="Enter your title" name="title" />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <Box ml={5} w="20%">
              <FormControl mb="0.5em" isRequired>
                <FormLabel htmlFor="startDate">Priority</FormLabel>

                <StyledSelect
                  size="md"
                  value={formik.values.priority}
                  onChange={(e) =>
                    formik.setFieldValue('priority', e.target.value)
                  }
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="important">Important</option>
                  <option value="urgent">Urgent</option>
                </StyledSelect>
              </FormControl>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <FormControl mb="0.5em" isRequired w="48%">
              <FormLabel htmlFor="startDate">Start date</FormLabel>
              <DatePicker
                selected={formik.values.startDate}
                onChange={(date: any) =>
                  formik.setFieldValue('startDate', date)
                }
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>

            <FormControl mb="0.5em" isRequired w="48%">
              <FormLabel htmlFor="dueDate">Due date</FormLabel>
              <DatePicker
                minDate={new Date(formik.values.startDate)}
                selected={formik.values.dueDate}
                onChange={(date: any) => formik.setFieldValue('dueDate', date)}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl
            mb="0.5em"
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
