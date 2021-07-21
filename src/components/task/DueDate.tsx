import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import DatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'

import { useUpdateTaskMutation } from '../../generated/hooks'
import { formatDate } from '../../helpers/formatDate'

interface Props {
  date: Date
  min: Date
  title: string
}

export const DueDate: React.FC<Props> = ({ date, title, min }) => {
  const { taskId: id } = useParams()

  const [show, setShow] = React.useState(false)
  const [dueDate, setDueDate] = React.useState(new Date(date))
  const [updateTask] = useUpdateTaskMutation()

  return (
    <Flex flexDirection="column" cursor="pointer">
      <Text fontSize="md" onClick={() => setShow(!show)}>
        {title}
      </Text>
      {!show ? (
        <Text fontSize="sm" color="gray.500" onClick={() => setShow(!show)}>
          {formatDate(dueDate)}
        </Text>
      ) : (
        <DatePicker
          minDate={min}
          autoFocus
          selected={dueDate}
          onChange={async (e: any) => {
            setDueDate(e)
            setShow(false)
            updateTask({
              variables: {
                id,
                object: {
                  dueDate: e,
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
