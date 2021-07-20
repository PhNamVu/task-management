import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { StatusButton } from '../../../components/board/StatusButton'
import { BoardTabMenu } from '../../../components/board/TabMenu'
import { ProgressLoading } from '../../../components/shared/Loading'
import { useGetBoardDetailQuery } from '../../../generated/hooks'
import { NotFoundError } from '../../../helpers/notFoundError'

const BoardDetailPage = () => {
  const { id } = useParams()
  const [isLarge] = useMediaQuery('(min-width: 720px)')

  const { data, loading, error } = useGetBoardDetailQuery({
    variables: {
      id,
    },
  })
  if (loading) return <ProgressLoading />
  if (error || data?.boards.length === 0) {
    throw new NotFoundError('Not found boards')
  }
  const board = data && data?.boards[0]

  return (
    <Box mx={5} mt={4}>
      <Flex
        w="100%"
        justifyContent="space-between"
        h="100%"
        flexDirection={isLarge ? 'row' : 'column'}
      >
        <Flex>
          <Heading as="h4" size="md" mr={3}>
            {board?.title}
          </Heading>
          <StatusButton status={board?.status} />
          <BoardTabMenu />
        </Flex>
      </Flex>
      <div>
        <Outlet />
      </div>
    </Box>
  )
}

export default BoardDetailPage
