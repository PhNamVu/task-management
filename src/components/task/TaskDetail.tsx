import {
  Avatar,
  AvatarGroup,
  Flex,
  Menu,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react'
import { parseInt } from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'

import {
  useTaskDetailQuery,
  useUpdateTaskMutation,
} from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'
import { ProgressLoading } from '../shared/Loading'
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

  if (loading) return <ProgressLoading />
  if (error || data?.tasks.length === 0) {
    throw new NotFoundError('Not found task')
  }
  const assignee = data && data.tasks[0].assignee

  return (
    <Flex>
      <Flex>
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
              <Avatar
                id={item.user.id}
                name={item.user.displayName}
                src={item.user.photoUrl}
              />
            )
          })}
        </AvatarGroup>
        <NewAssigneeButton assignees={assignee?.map((item) => item.user.id)} />
      </Flex>
    </Flex>
  )
}
