import { AvatarGroup, Box, Flex, Icon, Tooltip, Text } from '@chakra-ui/react'
import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BiLink } from 'react-icons/bi'
import { colorScheme } from '../../../helpers/colorScheme'
import { getStatusName } from '../../../helpers/getStatusName'
import { StyledAvatar } from '../../shared/StyledAvatar'
import { ToolTipIconButton } from '../../shared/ToolTipIconButton'

interface Props {
  task: any
  handleClick: any
}

export const TaskItemDepends: React.FC<Props> = ({ task, handleClick }) => {
  const navigate = useNavigate()
  const { taskId } = useParams()
  const location: any = useLocation()

  function checkTaskDepend(arr: { taskDependId: string }[], val: string) {
    return arr.some((e: { taskDependId: string }) => val === e.taskDependId)
  }

  function checkDependOn(arr: { taskId: string }[], val: string) {
    return arr.some((e: { taskId: any }) => val === e.taskId)
  }
  const boardId = location.pathname.split('/')[2]

  const taskDepend = checkTaskDepend(task.createDepend, taskId)
  const taskCreate = checkDependOn(task.dependOn, taskId)
  return (
    <Flex
      justifyContent="space-between"
      mt={2}
      _hover={{ cursor: 'pointer', opacity: 0.5 }}
    >
      <Flex alignItems="center" isTruncated maxWidth="70%">
        <Tooltip
          textTransform="uppercase"
          label={getStatusName(`${task.code}`)}
          placement="right"
        >
          <Box>
            <Icon
              mr={2}
              as={GoPrimitiveDot}
              w={4}
              h={4}
              color={colorScheme(`${task.code}`)}
            />
          </Box>
        </Tooltip>
        <Tooltip openDelay={500} label="Move to this task" placement="right">
          <Text
            onClick={() => {
              navigate(`/b/${boardId}/${task.id}`)
            }}
          >
            {task.title}
          </Text>
        </Tooltip>
      </Flex>
      <Flex>
        <AvatarGroup size="sm" max={3} ml={5}>
          {task.assignee?.map((item: any) => {
            return (
              <StyledAvatar
                key={item.user.id}
                id={item.user.id}
                name={item.user.displayName}
                src={item.user.photoUrl}
              />
            )
          })}
        </AvatarGroup>
        <ToolTipIconButton
          isDisabled={taskDepend || taskCreate}
          onClick={async () => {
            handleClick(task.id)
          }}
          aria-label="Linking"
          label="Linking this task"
          variant="ghost"
          size="sm"
          isRound
          icon={<BiLink />}
        />
      </Flex>
    </Flex>
  )
}
