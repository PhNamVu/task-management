import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

import { CardBoard } from '../../../components/board/CardBoard'
import { useGetTasksQuery } from '../../../generated/hooks'
import { Error } from '../../../components/shared/Error'
import { HiUser, HiUsers } from 'react-icons/hi'
import { ProgressLoading } from '../../../components/shared/Loading'
import { useAuth } from '../../../hooks/use-auth'
import useDebounce from '../../../hooks/use-debounce'
import { SearchInput } from '../../../components/shared/SearchInput'
import { StyledSpinner } from '../../../components/shared/StyledSpinner'

export const BoardViewPage = () => {
  const { id: boardId } = useParams()

  const { state }: any = useAuth()
  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

  const [me, setMe] = React.useState(false)
  const [input, setInput] = React.useState('')
  const searchTerm = useDebounce(input, 400)

  const { data, loading, error } = useGetTasksQuery({
    variables: {
      where: {
        _or: me
          ? [
              {
                _and: [
                  {
                    boardId: { _eq: boardId },
                  },
                  {
                    assignee: { userId: { _eq: userId } },
                  },
                  {
                    title: {
                      _ilike: `%${searchTerm}%`,
                    },
                  },
                  {
                    code: {
                      _neq: 0,
                    },
                  },
                ],
              },
            ]
          : [
              {
                _and: [
                  {
                    boardId: { _eq: boardId },
                  },
                  {
                    title: {
                      _ilike: `%${searchTerm}%`,
                    },
                  },
                  {
                    code: {
                      _neq: 0,
                    },
                  },
                ],
              },
            ],
      },
    },
    fetchPolicy: 'network-only',
  })
  if (error) return <Error />

  const todo = data?.tasks.filter(({ code }) => code === 1)
  const inProgress = data?.tasks.filter(({ code }) => code === 2)
  const done = data?.tasks.filter(({ code }) => code === 3)

  return (
    <>
      <Box mt={4}>
        <Flex w="100%" justifyContent="flex-end" h="100%">
          <Flex
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
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
            <SearchInput
              size="sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search task by title"
            />
          </Flex>
        </Flex>
        <div>
          <Outlet />
        </div>
      </Box>
      <SimpleGrid columns={[1, 1, 3]} spacingX="4rem" spacingY="2rem" mt={8}>
        {loading ? (
          <StyledSpinner />
        ) : (
          <>
            <CardBoard code={1} title="To Do" data={todo} />
            <CardBoard code={2} title="In progress" data={inProgress} />
            <CardBoard code={3} title="Done" data={done} />
          </>
        )}
      </SimpleGrid>
      <Outlet />
    </>
  )
}
