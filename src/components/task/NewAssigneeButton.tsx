import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  Flex,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SkeletonCircle,
} from '@chakra-ui/react'

import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import {
  useMembersQuery,
  useRemoveAssigneeMutation,
  TaskDetailDocument,
  useAssignTaskMutation,
} from '../../generated/hooks'
import { positiveToast, negativeToast } from '../../helpers/toaster'
import { Error } from '../shared/Error'

export const NewAssigneeButton = ({ assignees }: any) => {
  const { id, taskId } = useParams()
  const { data, loading, error } = useMembersQuery({
    variables: {
      where: {
        _and: [{ workspace: { boards: { id: { _eq: id } } } }],
      },
    },
  })
  const members = data?.user_workspace
  const [
    removeAssignee,
    { loading: loadingRemove },
  ] = useRemoveAssigneeMutation()

  const [assignTask, { loading: loadingAssign }] = useAssignTaskMutation()

  const handleUpdate = async (arr1: any, arr2: any) => {
    const del = arr1.filter((x: any) => !arr2.includes(x))
    const ins = arr2.filter((x: any) => !arr1.includes(x))

    if (del.length > 0) {
      try {
        const res = await removeAssignee({
          variables: {
            userId: del[0],
            taskId,
          },
          refetchQueries: [
            {
              query: TaskDetailDocument,
              variables: {
                id: taskId,
              },
            },
          ],
        })

        if (res.data?.delete_user_task?.affected_rows === 1) {
          positiveToast({
            description: `You removed ${res.data?.delete_user_task?.returning[0].user.displayName} out of this task`,
          })
        } else {
          negativeToast({
            title: 'Remove fail',
            description: 'Please try again',
          })
        }
      } catch (err) {
        negativeToast({
          title: 'Remove fail',
          description: err,
        })
      }
    }

    if (ins.length > 0) {
      try {
        const res = await assignTask({
          variables: {
            object: {
              userId: ins[0],
              taskId,
            },
          },
          refetchQueries: [
            {
              query: TaskDetailDocument,
              variables: {
                id: taskId,
              },
            },
          ],
        })

        if (res.data?.insert_user_task?.affected_rows === 1) {
          positiveToast({
            description: `You assigned ${res.data?.insert_user_task?.returning[0].user.displayName} for this task`,
          })
        } else {
          negativeToast({
            title: 'Assign fail',
            description: 'Please try again',
          })
        }
      } catch (err) {
        negativeToast({
          title: 'Assign fail',
          description: err,
        })
      }
    }
  }

  if (loading) {
    return <SkeletonCircle size="6" />
  }

  if (error) {
    return <Error />
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        ml={1}
        size="sm"
        isRound
        as={IconButton}
        aria-label="Options"
        icon={<AiOutlineUserAdd />}
      />
      <MenuList disabled>
        <MenuOptionGroup
          type="checkbox"
          defaultValue={assignees}
          onChange={(e) => {
            handleUpdate(assignees, e)
          }}
        >
          {members?.map((item: any) => {
            return (
              <MenuItemOption
                id={item.user.id}
                value={item.user.id}
                isDisabled={loadingRemove || loadingAssign}
              >
                <Flex alignItems="center">
                  <Avatar
                    id={item.user.id}
                    name={item.user.displayName}
                    src={item.user.photoUrl}
                    size="sm"
                    mr={2}
                  />
                  <span>{item.user.displayName}</span>
                </Flex>
              </MenuItemOption>
            )
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
