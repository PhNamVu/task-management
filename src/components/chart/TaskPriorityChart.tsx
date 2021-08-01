import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useCountTaskPriorityQuery } from '../../generated/hooks'
import { StyledSpinner } from '../shared/StyledSpinner'
import { Error } from '../shared/Error'
import { ChartBG, ChartBorder } from '../../constants/colors/chart'

export const TaskPriorityChart = ({ now }: any) => {
  const { id } = useParams()

  const { data, loading, error } = useCountTaskPriorityQuery({
    variables: {
      id,
      now,
    },
  })

  if (loading) return <StyledSpinner />
  if (error) return <Error />

  const low = data?.low.aggregate?.count || 0
  const lowLate = data?.lowLate.aggregate?.count || 0
  const lowDone = data?.lowDone.aggregate?.count || 0
  const medium = data?.medium.aggregate?.count || 0
  const mediumLate = data?.mediumLate.aggregate?.count || 0
  const mediumDone = data?.mediumDone.aggregate?.count || 0
  const important = data?.important.aggregate?.count || 0
  const importantLate = data?.importantLate.aggregate?.count || 0
  const importantDone = data?.importantDone.aggregate?.count || 0
  const urgent = data?.urgent.aggregate?.count || 0
  const urgentLate = data?.urgentLate.aggregate?.count || 0
  const urgentDone = data?.urgentDone.aggregate?.count || 0

  const state = {
    labels: ['Low', 'Medium', 'Important', 'Urgent'],
    datasets: [
      {
        stack: '1',
        label: 'Done',
        backgroundColor: ChartBG.GREEN,
        borderColor: ChartBorder.GREEN,
        borderWidth: 1,
        data: [lowDone, mediumDone, importantDone, urgentDone],
      },
      {
        stack: '1',
        label: 'Available',
        backgroundColor: ChartBG.BLUE,
        borderColor: ChartBorder.BLUE,
        borderWidth: 1,
        data: [low, medium, important, urgent],
      },
      {
        stack: '1',
        label: 'Late',
        backgroundColor: ChartBG.RED,
        borderColor: ChartBorder.RED,
        borderWidth: 1,
        data: [lowLate, mediumLate, importantLate, urgentLate],
      },
    ],
  }

  return (
    <Flex h="100%" flexDirection="column" justifyContent="flex-end">
      <Bar data={state} height={200} />
    </Flex>
  )
}
