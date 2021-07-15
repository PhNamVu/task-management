import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modaler } from '../../../../components/shared/Modaler'
import { TaskDetail } from '../../../../components/task/TaskDetail'

export const TaskDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const isOpen = true
  return (
    <Modaler isOpen={isOpen} onClose={() => navigate(`/b/${id}`)} size="6xl">
      <Box h="80vh">
        <SimpleGrid columns={[1, 2]} spacingX="3rem" spacingY="2rem">
          <TaskDetail />
          <h1>Task Comment</h1>
        </SimpleGrid>
      </Box>
    </Modaler>
  )
}
