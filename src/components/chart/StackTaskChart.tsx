import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useCountStackTaskQuery } from '../../generated/hooks'
import { StyledSpinner } from '../shared/StyledSpinner'
import { Error } from '../shared/Error'

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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [todo, inProgress, done],
      },
      {
        stack: '1',
        label: 'Late',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [todoLate, inProgressLate, 0],
      },
    ],
  }

  return (
    <Flex h="100%" flexDirection="column" justifyContent="flex-end">
      <Bar data={state} height={200} />
    </Flex>
  )
}
