import {
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

  return (
    <Flex>
      <Flex>
        <Menu>
          <MenuTaskButton code={code} />
          <MenuList minWidth="240px">
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
      </Flex>
    </Flex>
  )
}
