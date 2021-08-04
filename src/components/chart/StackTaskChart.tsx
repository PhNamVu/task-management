import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useCountStackTaskQuery } from '../../generated/hooks'
import { StyledSpinner } from '../shared/StyledSpinner'
import { Error } from '../shared/Error'
import { ChartBG, ChartBorder } from '../../constants/colors/chart'

export const StackTaskChart = ({ now }: any) => {
  const { id } = useParams()

  const { data, loading, error } = useCountStackTaskQuery({
    variables: {
      id,
      now,
    },
  })

  if (loading) return <StyledSpinner />
  if (error) return <Error />

  const todo = data?.todo.aggregate?.count || 0
  const inProgress = data?.inProgress.aggregate?.count || 0
  const todoLate = data?.todoLate.aggregate?.count || 0
  const inProgressLate = data?.inProgressLate.aggregate?.count || 0
  const done = data?.done.aggregate?.count || 0

  const state = {
    labels: ['Todo', 'In Progress', 'Done'],
    datasets: [
      {
        stack: '1',
        label: 'Available',
        backgroundColor: ChartBG.GREEN,
        borderColor: ChartBorder.GREEN,
        borderWidth: 1,
        data: [todo, inProgress, done],
      },
      {
        stack: '1',
        label: 'Late',
        backgroundColor: ChartBG.RED,
        borderColor: ChartBorder.RED,
        borderWidth: 1,
        data: [todoLate, inProgressLate, 0],
      },
    ],
  }

  const options = {
    maintainAspectRatio: true,

    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        position: 'top',
        text: `Task status`,
      },
    },
  }

  return (
    <Flex h="100%" flexDirection="column" justifyContent="flex-end">
      <Bar data={state} height={200} options={options} />
    </Flex>
  )
}
