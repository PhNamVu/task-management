import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { TotalTaskPieChart } from '../../../components/chart/TotalTaskPieChart'

export const ChartViewPage = () => {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacingX="3rem"
      spacingY="2rem"
      mt={8}
      // h="100vh"
    >
      <TotalTaskPieChart now={new Date().toISOString()} />
      <p>ps</p>
      <p>ps</p>
      <p>ps</p>
      <p>ps</p>
      <p>ps</p>
      <p>ps</p>
      <p>ps</p>
    </SimpleGrid>
  )
}
