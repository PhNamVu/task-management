import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useUpdateTaskMutation } from '../../generated/hooks'
import { StyledSelect } from '../shared/StyledSelect'
import { TaskPriorityBadge } from './TaskPriorityBadge'

interface Props {
  priority: string
}

export const UpdatePriority: React.FC<Props> = ({ priority }) => {
  const { taskId: id } = useParams()

  const [priorityValue, setPriorityValue] = React.useState(priority)
  const [display, setDisplay] = React.useState(true)
  const [updateTask] = useUpdateTaskMutation()

  return (
    <Box mr={5}>
      {display ? (
        <TaskPriorityBadge
          priority={priorityValue}
          _hover={{ cursor: 'pointer' }}
          onClick={() => setDisplay(false)}
        />
      ) : (
        <StyledSelect
          autoFocus
          size="md"
          value={priorityValue}
          onChange={(e) => {
            setPriorityValue(e.target.value)
            updateTask({
              variables: {
                id,
                object: {
                  priority: e.target.value,
                },
              },
            })
          }}
          onBlur={() => setDisplay(true)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
        </StyledSelect>
      )}
    </Box>
  )
}
