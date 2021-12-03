import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { AddBoardButton } from './AddBoardButton'
import { useGetBoardsQuery } from '../../generated/hooks'
import { ProgressLoading } from '../shared/Loading'
import { Error } from '../shared/Error'
import { BoardItem } from './BoardItem'

interface WorkspaceBoardProps {
  id: string
}

export const WorkspaceBoard: React.FC<WorkspaceBoardProps> = ({ id }) => {
  const { data, loading, error, refetch } = useGetBoardsQuery({
    variables: {
      id,
    },
  })

  if (loading) return <ProgressLoading />
  if (error) return <Error />
  const boards = data && data.boards

  return (
    <SimpleGrid columns={[1, 2, 3, 5]} spacingX="3rem" spacingY="2rem" mt={5}>
      {boards?.map((board) => {
        return <BoardItem key={board.id} item={board} refetch={refetch} />
      })}
      <AddBoardButton id={id} />
    </SimpleGrid>
  )
}
