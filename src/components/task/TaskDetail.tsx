import {
  AvatarGroup,
  Flex,
  FormControl,
  Menu,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Box,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { parseInt } from 'lodash'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import {
  useTaskDetailQuery,
  useUpdateTaskMutation,
} from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'
import { EditableText } from '../shared/EditableText'
import { ProgressLoading } from '../shared/Loading'
import { StyledAvatar } from '../shared/StyledAvatar'
import { StyledTextArea } from '../shared/StyledTextArea'
import { MenuTaskButton } from './MenuTaskButton'
import { NewAssigneeButton } from './NewAssigneeButton'

export const TaskDetail = () => {
  const { taskId: id } = useParams()
  const { data, loading, error, refetch } = useTaskDetailQuery({
    variables: { id },
    fetchPolicy: 'network-only',
  })
  const [updateTask] = useUpdateTaskMutation()

  const task = data?.tasks[0]
  const code = task?.code.toString()
  const assignee = data && data.tasks[0].assignee

  if (loading) return <ProgressLoading />
  if (error || data?.tasks.length === 0) {
    throw new NotFoundError('Not found task')
  }

  return (
    <>
      <Helmet>
        <title>{`${task?.title} || Birdy`}</title>
      </Helmet>
      <Flex
        flexDirection="column"
        borderRight="1px solid rgb(226, 226, 226)"
        // h="100%"
        // w="100%"
        // pr={5}
      >
        <Flex borderBottom="1px solid rgb(226, 226, 226)" pb={5}>
          <Menu>
            <MenuTaskButton code={code} />
            <MenuList minWidth="100px">
              <MenuOptionGroup
                defaultValue={code}
                type="radio"
                onChange={async (e: any) => {
                  await updateTask({
                    variables: {
                      id,
                      object: {
                        code: parseInt(e),
                      },
                    },
                  })
                  refetch()
                }}
              >
                <MenuItemOption value="1">TODO</MenuItemOption>
                <MenuItemOption value="2">IN PROGRESS</MenuItemOption>
                <MenuItemOption value="3">DONE</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <AvatarGroup size="sm" max={3} ml={5}>
            {assignee?.map((item: any) => {
              return (
                <StyledAvatar
                  id={item.user.id}
                  name={item.user.displayName}
                  src={item.user.photoUrl}
                />
              )
            })}
          </AvatarGroup>
          <NewAssigneeButton
            assignees={assignee?.map((item) => item.user.id)}
          />
        </Flex>

        <EditableText
          defaultValue={task?.title}
          my={5}
          mr={5}
          fontSize="2xl"
          placeholder="Input title"
          onSubmit={async (e: string) => {
            await updateTask({
              variables: {
                id,
                object: {
                  title: e.length > 0 ? e : 'untitled',
                },
              },
            })
            refetch()
          }}
        />

        <Box mr={5}>
          <Formik
            initialValues={{
              description: task?.description ? task.description : '',
            }}
            onSubmit={() => {
              console.log('submit')
            }}
          >
            {() => (
              <Form>
                <FormControl mb="0.5em">
                  <StyledTextArea
                    placeholder="Enter your description"
                    name="description"
                    onBlur={(e: any) => {
                      updateTask({
                        variables: {
                          id,
                          object: {
                            description: e.target.value,
                          },
                        },
                      })
                    }}
                    height="20rem"
                  />
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  )
}
