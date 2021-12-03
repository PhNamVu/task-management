import React from 'react'
import { Text, Tooltip } from '@chakra-ui/react'
import { format, formatDistanceToNowStrict, isBefore } from 'date-fns'

interface Props {
  code: number
  date: Date
}

export const DueDateLeft: React.FC<Props> = ({ code, date }) => {
  if (code === 3) {
    return (
      <Tooltip label="Due date" placement="auto">
        <Text fontSize="sm" color="gray.500">
          {format(new Date(date), 'dd/MM/yyyy')}
        </Text>
      </Tooltip>
    )
  }
  if (isBefore(new Date(date), new Date())) {
    return (
      <Tooltip label="Due date" placement="auto">
        <Text fontSize="sm" color="red.500">
          Over due {formatDistanceToNowStrict(new Date(date))}
        </Text>
      </Tooltip>
    )
  }
  return (
    <Tooltip label="Due date" placement="auto">
      <Text fontSize="sm" color="gray.500">
        {formatDistanceToNowStrict(new Date(date))} left
      </Text>
    </Tooltip>
  )
}
