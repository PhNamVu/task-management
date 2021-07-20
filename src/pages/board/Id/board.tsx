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
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { CardBoard } from '../../../components/board/CardBoard'
import { useGetTasksQuery } from '../../../generated/hooks'
import { Error } from '../../../components/shared/Error'
import { BiSearch } from 'react-icons/bi'
import { HiUser, HiUsers } from 'react-icons/hi'
import { StatusButton } from '../../../components/board/StatusButton'
import { BoardTabMenu } from '../../../components/board/TabMenu'

export const BoardViewPage = () => {
  const [me, setMe] = React.useState(false)
  const { id: boardId } = useParams()
  const { data, error } = useGetTasksQuery({
    variables: {
      boardId,
    },
    fetchPolicy: 'network-only',
  })
  if (error) return <Error />

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
      <SimpleGrid columns={[1, 1, 3]} spacingX="4rem" spacingY="2rem" mt={8}>
        <CardBoard code={1} title="To Do" data={data?.todo} />
        <CardBoard code={2} title="In progress" data={data?.inProgress} />
        <CardBoard code={3} title="Done" data={data?.done} />
      </SimpleGrid>
      <Outlet />
    </>
  )
}
