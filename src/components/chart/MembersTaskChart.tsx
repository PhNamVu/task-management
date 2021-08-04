import React from 'react'
import { useParams } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Box } from '@chakra-ui/react'
import { useCountUserBoardTaskQuery } from '../../generated/hooks'
import { ChartBG, ChartBorder } from '../../constants/colors/chart'
import { StyledSpinner } from '../shared/StyledSpinner'
import { Error } from '../shared/Error'

export const MembersTaskChart = ({ now }: any) => {
  const { id } = useParams()
  const { data, loading, error } = useCountUserBoardTaskQuery({
    variables: {
      id,
      now,
    },
  })
  const users =
    data?.boards[0].workspace.user_workspaces.map((i) => i.user.displayName) ||
    []
  const todo =
    data?.boards[0].workspace.user_workspaces.map(
      (i) => i.user.todo.aggregate?.count
    ) || []
  const inProgress =
    data?.boards[0].workspace.user_workspaces.map(
      (i) => i.user.inProgress.aggregate?.count
    ) || []
  const done =
    data?.boards[0].workspace.user_workspaces.map(
      (i) => i.user.done.aggregate?.count
    ) || []
  const late =
    data?.boards[0].workspace.user_workspaces.map(
      (i) => i.user.late.aggregate?.count
    ) || []

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        paddingBottom: 4,
      },
      title: {
        display: true,
        position: 'top',
        text: 'Member tasks',
      },
    },
  }
  const state = {
    labels: [...users],
    datasets: [
      {
        stack: '1',
        label: 'Done',
        backgroundColor: ChartBG.GREEN,
        borderColor: ChartBorder.GREEN,
        borderWidth: 1,
        data: [...done],
      },
      {
        stack: '1',
        label: 'Todo',
        backgroundColor: ChartBG.BLUE,
        borderColor: ChartBorder.BLUE,
        borderWidth: 1,
        data: [...todo],
      },
      {
        stack: '1',
        label: 'In progress',
        backgroundColor: ChartBG.YELLOW,
        borderColor: ChartBorder.YELLOW,
        borderWidth: 1,
        data: [...inProgress],
      },
      {
        stack: '1',
        label: 'Late',
        backgroundColor: ChartBG.RED,
        borderColor: ChartBorder.RED,
        borderWidth: 1,
        data: [...late],
      },
    ],
  }

  if (loading) return <StyledSpinner />
  if (error) return <Error />
  return (
    <Box maxHeight="500px">
      <Bar data={state} height={100} options={options} />
    </Box>
  )
}
