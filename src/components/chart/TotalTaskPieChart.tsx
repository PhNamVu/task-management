import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Box } from '@chakra-ui/react'
import { useCountTotalTaskQuery } from '../../generated/hooks'
import { useParams } from 'react-router-dom'
import { StyledSpinner } from '../shared/StyledSpinner'
import { Error } from '../shared/Error'
import { ChartBG, ChartBorder } from '../../constants/colors/chart'

export const TotalTaskPieChart = ({ now }: any) => {
  const { id } = useParams()
  const { data: res, loading, error } = useCountTotalTaskQuery({
    variables: {
      id,
      now,
    },
  })

  if (loading) return <StyledSpinner />
  if (error) return <Error />

  const overDue = res?.overDue?.aggregate?.count || 0
  const todo = res?.todo.aggregate?.count || 0
  const inProgress = res?.inProgress.aggregate?.count || 0
  const done = res?.done.aggregate?.count || 0
  const total = overDue + todo + inProgress + done
  const data = {
    labels: ['Late', 'Todo', 'In Progress', 'Done'],
    datasets: [
      {
        data: [overDue, todo, inProgress, done],
        backgroundColor: [
          ChartBG.RED,
          ChartBG.BLUE,
          ChartBG.YELLOW,
          ChartBG.GREEN,
        ],
        borderColor: [
          ChartBorder.RED,
          ChartBorder.BLUE,
          ChartBorder.YELLOW,
          ChartBorder.GREEN,
        ],
        borderWidth: 1,
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
        text: `Total task: ${total}`,
      },
    },
  }
  return (
    <Box alignContent="center" px={20}>
      <Doughnut data={data} options={options} />
    </Box>
  )
}
