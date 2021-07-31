import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Box } from '@chakra-ui/react'
import { useCountTotalTaskQuery } from '../../generated/hooks'
import { useParams } from 'react-router-dom'

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// }

export const TotalTaskPieChart = ({ now }: any) => {
  const { id } = useParams()
  const { data: res, loading, error } = useCountTotalTaskQuery({
    variables: {
      id,
      now,
    },
  })

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
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <Box alignContent="center" px={20}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          defaultFontSize: '14px',
        }}
      />
      <Box mt={2} textAlign="center">
        Total task: {total}{' '}
      </Box>
    </Box>
  )
}
