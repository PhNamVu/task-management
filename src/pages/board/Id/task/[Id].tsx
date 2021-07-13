import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modaler } from '../../../../components/shared/Modaler'

export const TaskDetailPage = () => {
  const navigate = useNavigate()
  const { id, taskId } = useParams()
  const isOpen = true
  return (
    <Modaler isOpen={isOpen} onClose={() => navigate(`/b/${id}`)} size="6xl">
      <Box h="80vh">
        <p>{taskId}</p>
      </Box>
    </Modaler>
  )
}
