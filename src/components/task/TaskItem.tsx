import {
  AvatarGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { BiTrashAlt } from 'react-icons/bi'

import { shortString } from '../../helpers/shortString'
import { MotionBox } from '../motion/MotionBox'
import { StyledAvatar } from '../shared/StyledAvatar'
import { ToolTipIconButton } from '../shared/ToolTipIconButton'
import { GetTasksDocument, useDeleteTaskMutation } from '../../generated/hooks'
import { DueDateLeft } from './DueDateLeft'

interface Props {
  item?: any
}

export const TaskItem: React.FC<Props> = ({ item }) => {
  const { id: boardId } = useParams()
  const location: any = useLocation()
  const [deleteTask] = useDeleteTaskMutation()
  const bg = useColorModeValue('white', 'gray.600')
  const [display, setDisplay] = React.useState(false)
  return (
    <MotionBox
      mb={5}
      borderRadius={5}
      boxShadow="base"
      p={5}
      bg={bg}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      _hover={{ cursor: 'pointer', boxShadow: 'revert' }}
      animate={{ scale: [0, 1] }}
      transition={{ duration: 0.25, ease: 'linear' }}
    >
      {display && (
        <Flex justifyContent="flex-end">
          {' '}
          <ToolTipIconButton
            onClick={() =>
              deleteTask({
                variables: {
                  id: item.id,
                },
                refetchQueries: [
                  {
                    query: GetTasksDocument,
                    variables: {
                      where: {
                        boardId: { _eq: boardId },
                      },
                    },
                  },
                ],
              })
            }
            aria-label="Delete"
            label="Delete"
            variant="ghost"
            size="sm"
            isRound
            icon={<BiTrashAlt />}
          />
        </Flex>
      )}
      <NavLink to={`${location.pathname}/${item.id}`}>
        <Text>{shortString(item?.title, 40)}</Text>
        <Flex justifyContent="space-between" mt={2} alignContent="center">
          <Flex alignContent="center">
            <DueDateLeft code={item.code} date={item.dueDate} />
          </Flex>
          <AvatarGroup size="sm" max={3}>
            {item.assignee?.map((assignee: any) => (
              <StyledAvatar
                key={assignee.id}
                name={assignee.user.displayName}
                src={assignee.user.photoUrl}
              />
            ))}
          </AvatarGroup>
        </Flex>
      </NavLink>
    </MotionBox>
  )
}
