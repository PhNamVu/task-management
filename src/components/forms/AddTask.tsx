import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { Form, Formik } from 'formik'
import randomstring from 'randomstring'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

import './date-picker.css'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { AddWorkspaceValidation } from '../../helpers/validation'
import { PrimaryBtn } from '../shared/PrimaryBtn'
import { StyledInput } from '../shared/StyledInput'
import { StyledTextArea } from '../shared/StyledTextArea'

interface Props {
  onClose: () => void
}

export const AddTaskForm: React.FC<Props> = ({ onClose }) => {
  return (
    <Formik
      initialValues={{
        id: randomstring.generate(5),
        title: '',
        description: '',
        startDate: new Date(),
        dueDate: new Date(),
      }}
      validationSchema={AddWorkspaceValidation}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true)
          await setTimeout(() => {
            console.log('submit', values, new Date())
            actions.setSubmitting(false)
          }, 1000)
          // console.log('values ne', values)
          // onClose()

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
          <FormControl
            mb="0.5em"
            isRequired
            isInvalid={formik.errors.title && formik.touched.title}
          >
            <FormLabel htmlFor="title">Title</FormLabel>
            <StyledInput placeholder="Enter your title" name="title" />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>

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
