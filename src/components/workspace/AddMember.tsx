import { Box, Flex, FormControl, IconButton, Button } from '@chakra-ui/react'
import React from 'react'
import Select from 'react-select'
import { IoPersonAdd } from 'react-icons/io5'
import { Formik, Form } from 'formik'
import { positiveToast, negativeToast } from '../../helpers/toaster'

export const AddMember = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <Formik
      initialValues={{
        user: '',
      }}
      onSubmit={async (values, actions) => {
        try {
          console.log('a', values)
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
          <Flex mx={2}>
            <Box width="90%">
              <FormControl mb="0.5em">
                <Select
                  isClearable
                  isSearchable
                  onChange={(value: any) => {
                    formik.setFieldValue('user', value)
                    console.log(formik.values)
                  }}
                  value={formik.values.user}
                  options={options}
                />
              </FormControl>
            </Box>
            <IconButton
              type="submit"
              ml={2}
              aria-label="Add"
              icon={<IoPersonAdd />}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
