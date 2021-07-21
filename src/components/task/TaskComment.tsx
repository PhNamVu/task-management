import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useTaskCommentQuery } from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'
import { ProgressLoading } from '../shared/Loading'
import { DateDisplay } from './DateDisplay'
import { DueDate } from './DueDate'
import { StartDate } from './StartDate'

export const TaskComment = () => {
  const { taskId: id } = useParams()
  const { data, loading, error } = useTaskCommentQuery({
    variables: { id },
    fetchPolicy: 'network-only',
  })

  const task = data?.tasks[0]

  if (loading) return <ProgressLoading />
  if (error || data?.tasks.length === 0) {
    throw new NotFoundError('Not found task')
  }
  return (
    <Flex flexDirection="column" justifyContent="space-between" h="100%">
      <Flex
        borderBottom="1px solid #B5AEAE"
        justifyContent="space-between"
        pb="0.42rem"
        pl={5}
      >
        <DateDisplay
          isReadOnly
          title="Create at"
          date={new Date(task?.createdAt)}
        />
        <StartDate
          title="Start date"
          date={new Date(task?.startDate)}
          max={new Date(task?.dueDate)}
        />

        <DueDate
          title="Due date"
          date={new Date(task?.dueDate)}
          min={new Date(task?.startDate)}
        />
      </Flex>
      <p>hasuhu</p>
    </Flex>
  )
}
