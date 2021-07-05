import { Flex, FormControl, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import Select from 'react-select'
import { IoPersonAdd } from 'react-icons/io5'
import { Formik, Form } from 'formik'
import { gql, useQuery } from '@apollo/client'
import { debounce } from 'lodash'

import { positiveToast, negativeToast } from '../../helpers/toaster'
import { useParams } from 'react-router-dom'
import {
  usePostUserWorkspaceMutation,
  GetWorkspaceDetailDocument,
} from '../../generated/hooks'

export const AddMember = () => {
  const { id } = useParams()
  const [search, setSearch] = useState('')
  const handleFilter = debounce((val) => {
    setSearch(val)
  }, 500)
  const onChange = (e: any) => {
    handleFilter(e)
  }

  const { data, loading } = useQuery(
    gql`
      query search_user($search: String) {
        search_users(args: { search: $search }) {
          id
          email
          displayName
        }
      }
    `,
    {
      variables: {
        search,
      },
    }
  )
  const [postUserWorkspace] = usePostUserWorkspaceMutation()

  const options =
    data?.search_users.map((item: any) => ({
      id: item.id,
      value: item.id,
      label: `${item.email}, ${item.displayName}`,
    })) || []

  return (
    <Formik
      initialValues={{
        user: { value: '', label: '' },
      }}
      onSubmit={async (val, actions) => {
        try {
          actions.setSubmitting(true)
          await postUserWorkspace({
            variables: {
              object: {
                userId: val.user.value,
                workspaceId: id,
              },
            },
            refetchQueries: [
              {
                query: GetWorkspaceDetailDocument,
                variables: {
                  id,
                },
              },
            ],
          })
          positiveToast({
            title: 'Add new member successfully',
          })
          actions.setSubmitting(false)
        } catch (error) {
          negativeToast({
            title: 'Error. Please try again!',
            description: error.message,
          })
          actions.setSubmitting(false)
          actions.resetForm()
        }
      }}
    >
      {(formik: any) => (
        <Form>
          <Flex mx={2} alignItems="center" mb="0.5em" justifyContent="center">
            <FormControl w="50%">
              <Select
                isLoading={loading}
                onInputChange={onChange}
                placeholder="Find user by email"
                isClearable
                isSearchable
                backspaceRemoves
                onChange={(value: any) => {
                  formik.setFieldValue('user', value)
                }}
                value={formik.values.user}
                options={options}
              />
            </FormControl>
            <IconButton
              isLoading={formik.isSubmitting}
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
