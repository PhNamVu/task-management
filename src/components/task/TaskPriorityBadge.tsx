import { Badge, BadgeProps, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { TaskPriority } from '../../constants/task'

const getColorScheme = (priority: string) => {
  switch (priority) {
    case TaskPriority.LOW:
      return 'gray'
    case TaskPriority.MEDIUM:
      return 'blue'
    case TaskPriority.IMPORTANT:
      return 'yellow'
    case TaskPriority.URGENT:
      return 'red'
    default:
      return 'teal'
  }
}

interface Props extends BadgeProps {
  priority: string | null | undefined
}

export const TaskPriorityBadge: React.FC<Props> = ({ priority, ...props }) => {
  return (
    <Tooltip label="Priority" placement="auto">
      <Badge
        {...props}
        variant="subtle"
        colorScheme={priority ? getColorScheme(priority) : 'teal'}
        textTransform="capitalize"
      >
        {priority}
      </Badge>
    </Tooltip>
  )
}
