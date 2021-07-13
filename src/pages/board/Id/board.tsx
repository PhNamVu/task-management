import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { CardBoard } from '../../../components/board/CardBoard'
import { useGetTasksQuery } from '../../../generated/hooks'
import { Error } from '../../../components/shared/Error'

export const BoardViewPage = () => {
  const { id: boardId } = useParams()
  const { data, error } = useGetTasksQuery({
    variables: {
      boardId,
    },
  })
  if (error) return <Error />

  return (
    <SimpleGrid columns={[1, 1, 3]} spacingX="4rem" spacingY="2rem" mt={8}>
      <CardBoard code={1} title="To Do" data={data?.todo} />
      <CardBoard code={2} title="In progress" data={data?.inProgress} />
      <CardBoard code={3} title="Done" data={data?.done} />
    </SimpleGrid>
  )
}
