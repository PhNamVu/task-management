import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { TotalTaskPieChart } from '../../../components/chart/TotalTaskPieChart'
import { StackTaskChart } from '../../../components/chart/StackTaskChart'
import { TaskPriorityChart } from '../../../components/chart/TaskPriorityChart'
import { MembersTaskChart } from '../../../components/chart/MembersTaskChart'

export const ChartViewPage = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacingX="3rem" spacingY="2rem" mt={8}>
        <TotalTaskPieChart now={new Date().toISOString()} />
        <StackTaskChart now={new Date().toISOString()} />
        <TaskPriorityChart now={new Date().toISOString()} />
      </SimpleGrid>
      <Box mt={5}>
        <MembersTaskChart now={new Date().toISOString()} />
      </Box>
    </>
  )
}
