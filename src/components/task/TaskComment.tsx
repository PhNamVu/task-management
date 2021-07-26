import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

import {
  useAddTaskCommentMutation,
  useTaskCommentQuery,
} from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'
import { ProgressLoading } from '../shared/Loading'
import { CommentInput } from './comment/CommentInput'
import { DateDisplay } from './DateDisplay'
import { DueDate } from './DueDate'
import { StartDate } from './StartDate'

export const TaskComment = () => {
  const { taskId: id } = useParams()
  const { data, loading, error } = useTaskCommentQuery({
    variables: { id },
    fetchPolicy: 'network-only',
  })

  const [addTaskComment] = useAddTaskCommentMutation()

  const onSendComment = async (object: any) => {
    object.taskId = id
    try {
      const res = await addTaskComment({
        variables: {
          object,
        },
      })

      if (res.data) {
        console.log('a new  comment added ', res.data)
      }
    } catch (err) {
      console.log('error  comment added ', err)
    }
  }

  const task = data?.tasks[0]

  if (loading) return <ProgressLoading />
  if (error || data?.tasks.length === 0) {
    throw new NotFoundError('Not found task')
  }
  return (
    <Flex flexDirection="column" justifyContent="space-between" h="100%">
      <Flex
        borderBottom="1px solid rgb(226, 226, 226)"
        justifyContent="space-between"
        pb="0.42rem"
        pl={5}
      >
        <DateDisplay
          isReadOnly
          title="Created at"
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
      <CommentInput
        maxSizeFile={20}
        acceptedFileExtensions=".pdf,.docx,.doc,.jpg,.bmp,.gif,.jpeg,.xls,.xlsx,.txt,.png,.pptx,.ppt,.mov,.avi,.mp4,.mpg,.mpeg,.wmv,.flv,.f4v"
        refStorage={`tasks/${id}`}
        onSendComment={onSendComment}
      />
    </Flex>
  )
}
