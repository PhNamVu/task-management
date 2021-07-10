import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { HiUser, HiUsers } from 'react-icons/hi'
import { StatusButton } from '../../../components/board/StatusButton'
import { BoardTabMenu } from '../../../components/board/TabMenu'
import { ProgressLoading } from '../../../components/shared/Loading'
import { useGetBoardDetailQuery } from '../../../generated/hooks'
import { NotFoundError } from '../../../helpers/notFoundError'
import { BiSearch } from 'react-icons/bi'

const BoardDetailPage = () => {
  const { id } = useParams()
  const [me, setMe] = React.useState(false)
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
        <Flex alignContent="center" alignItems="center" justifyContent="center">
          <ButtonGroup size="sm" isAttached variant="outline" mr={5}>
            <Button
              onClick={() => setMe(true)}
              colorScheme={me ? 'cyan' : 'gray'}
              leftIcon={<HiUser />}
            >
              Me
            </Button>
            <IconButton
              onClick={() => setMe(false)}
              colorScheme={!me ? 'cyan' : 'gray'}
              aria-label="Uses"
              icon={<HiUsers />}
            />
          </ButtonGroup>
          <InputGroup size="sm">
            <InputLeftElement pointerEvents="none">
              <BiSearch color="gray" />
            </InputLeftElement>
            <Input borderRadius={5} type="tel" placeholder="Search task" />
          </InputGroup>
        </Flex>
      </Flex>
      <div>
        <Outlet />
      </div>
    </Box>
  )
}

export default BoardDetailPage
