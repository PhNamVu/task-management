import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import DatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'

import { useUpdateTaskMutation } from '../../generated/hooks'
import { formatDate } from '../../helpers/formatDate'

interface Props {
  date: Date
  title: string
  max: Date
}

export const StartDate: React.FC<Props> = ({ date, title, max }) => {
  const { taskId: id } = useParams()

  const [show, setShow] = React.useState(false)
  const [startDate, setStartDate] = React.useState(new Date(date))
  const [updateTask] = useUpdateTaskMutation()

  return (
    <Flex flexDirection="column" cursor="pointer">
      <Text fontSize="md" onClick={() => setShow(!show)}>
        {title}
      </Text>
      {!show ? (
        <Text fontSize="sm" color="gray.500" onClick={() => setShow(!show)}>
          {formatDate(startDate)}
        </Text>
      ) : (
        <DatePicker
          maxDate={max}
          autoFocus
          selected={startDate}
          onChange={async (e: any) => {
            setStartDate(e)
            setShow(false)
            updateTask({
              variables: {
                id,
                object: {
                  startDate: e,
                },
              },
            })
          }}
          onCalendarClose={() => {
            setShow(false)
          }}
        />
      )}
    </Flex>
  )
}
