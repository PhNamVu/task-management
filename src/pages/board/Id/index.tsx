import {
  Box,
  Flex,
  Menu,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useMediaQuery,
} from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, useParams } from 'react-router-dom'
import { StatusButton } from '../../../components/board/StatusButton'
import { BoardTabMenu } from '../../../components/board/TabMenu'
import { EditableText } from '../../../components/shared/EditableText'
import { ProgressLoading } from '../../../components/shared/Loading'
import {
  useGetBoardDetailQuery,
  useUpdateBoardMutation,
} from '../../../generated/hooks'
import { NotFoundError } from '../../../helpers/notFoundError'

const BoardDetailPage = () => {
  const { id } = useParams()
  const [isLarge] = useMediaQuery('(min-width: 720px)')

  const { data, loading, error, refetch } = useGetBoardDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  })
  const [updateBoard] = useUpdateBoardMutation()

  if (loading) return <ProgressLoading />
  if (error || data?.boards.length === 0) {
    throw new NotFoundError('Not found boards')
  }
  const board = data && data?.boards[0]
  const status = board?.status || 'in progress'

  return (
    <>
      <Helmet>
        <title>{`${board?.title} | Birdy`}</title>
      </Helmet>
      <Box mx={5} mt={4}>
        <Flex
          w="100%"
          justifyContent="space-between"
          h="100%"
          flexDirection={isLarge ? 'row' : 'column'}
        >
          <Flex alignItems="center">
            <EditableText
              mr={3}
              defaultValue={board?.title}
              fontWeight="bold"
              fontSize="lg"
              placeholder="Input title"
              onSubmit={(e: string) => {
                updateBoard({
                  variables: {
                    id,
                    object: {
                      title: e.length > 0 ? e : 'untitled',
                    },
                  },
                })
              }}
            />
            <Menu>
              <StatusButton status={status} />

              <MenuList minWidth="100px">
                <MenuOptionGroup
                  defaultValue={status}
                  type="radio"
                  onChange={async (e: any) => {
                    await updateBoard({
                      variables: {
                        id,
                        object: {
                          status: e,
                        },
                      },
                    })
                    refetch()
                  }}
                >
                  <MenuItemOption value="in progress">
                    In progress
                  </MenuItemOption>
                  <MenuItemOption value="archived">Archived</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <BoardTabMenu />
          </Flex>
        </Flex>
        <div>
          <Outlet />
        </div>
      </Box>
    </>
  )
}

export default BoardDetailPage
