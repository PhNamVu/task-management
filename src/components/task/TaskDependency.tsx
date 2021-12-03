import React from 'react'
import {
  Tag,
  TagCloseButton,
  Text,
  Box,
  Icon,
  Tooltip,
  Flex,
} from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'
import { colorScheme } from '../../helpers/colorScheme'
import { getStatusName } from '../../helpers/getStatusName'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDeleteDependencyMutation } from '../../generated/hooks'

interface Props {
  status: string
  task: any
  refetch?: any
}

export const getStatusColor = (c: any) => {
  switch (c) {
    case 'waiting':
      return 'yellow'
    case 'blocking':
      return 'red'
    default:
      return 'gray'
  }
}

export const CreateDependendTask: React.FC<Props> = ({
  status,
  task,
  refetch,
}) => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const location: any = useLocation()
  const [deleteDependency] = useDeleteDependencyMutation()

  const boardId = location.pathname.split('/')[2]

  return (
    <Tag mt={2} colorScheme={getStatusColor(status)}>
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
      <Flex>
        <Text textTransform="capitalize">{status}</Text>
        <Text ml={1}>on</Text>

        <Text
          color="blue.300"
          ml={1}
          textDecoration="underline"
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/b/${boardId}/${task.id}`)
          }}
        >
          {task.title}
        </Text>
      </Flex>

      <TagCloseButton
        onClick={async () => {
          await deleteDependency({
            variables: {
              taskId,
              taskDependId: task.id,
            },
          })
          refetch()
        }}
      />
    </Tag>
  )
}

export const DepenOnTask: React.FC<Props> = ({ status, task, refetch }) => {
  const { taskId: taskDependId } = useParams()
  const navigate = useNavigate()

  const location: any = useLocation()
  const [deleteDependency] = useDeleteDependencyMutation()

  const boardId = location.pathname.split('/')[2]
  const revertStatus = status === 'waiting' ? 'blocking' : 'waiting'

  return (
    <Tag mt={2} colorScheme={getStatusColor(revertStatus)}>
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
      <Flex>
        <Text textTransform="capitalize">{revertStatus}</Text>
        <Text ml={1}>on</Text>

        <Text
          color="blue.300"
          ml={1}
          textDecoration="underline"
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/b/${boardId}/${task.id}`)
          }}
        >
          {task.title}
        </Text>
      </Flex>

      <TagCloseButton
        onClick={async () => {
          await deleteDependency({
            variables: {
              taskId: task.id,
              taskDependId,
            },
          })
          refetch()
        }}
      />
    </Tag>
  )
}
