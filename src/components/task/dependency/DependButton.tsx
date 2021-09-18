import { Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiNetworkChart } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import {
  useGetDependenciesQuery,
  usePostTaskDependencyMutation,
} from '../../../generated/hooks'
import { negativeToast, positiveToast } from '../../../helpers/toaster'
import { ProgressLoading } from '../../shared/Loading'
import { Modaler } from '../../shared/Modaler'
import { SearchInput } from '../../shared/SearchInput'
import { ToolTipIconButton } from '../../shared/ToolTipIconButton'
import { AddBlocking } from './AddBlocking'
import { AddWaiting } from './AddWaiting'
import { TaskItemDepends } from './TaskItemDepend'
import { Error } from '../../shared/Error'

interface Props {
  fetchDetail: any
}

export const DependButton: React.FC<Props> = ({ fetchDetail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [status, setStatus] = React.useState('')
  const { id, taskId } = useParams()
  const [input, setInput] = React.useState('')

  const { data, loading, error, refetch } = useGetDependenciesQuery({
    variables: {
      where: {
        _and: [
          { boardId: { _eq: id } },
          { id: { _neq: taskId } },
          { code: { _neq: 0 } },
        ],
      },
    },
  })

  const [postTaskDependency] = usePostTaskDependencyMutation()

  const handleClick = async (taskDependId: string) => {
    try {
      await postTaskDependency({
        variables: {
          object: {
            taskId,
            taskDependId,
            status,
          },
        },
      })
      await refetch()
      fetchDetail()
      positiveToast({
        title: 'Create dependency successfully',
      })
    } catch (err) {
      negativeToast({
        title: 'Error. Please try again!',
      })
      console.error(err)
    }
  }
  if (loading) return <ProgressLoading />
  if (error) return <Error />

  const tasks = data?.tasks || []

  return (
    <>
      <ToolTipIconButton
        aria-label="Delete"
        label="Dependencies"
        size="sm"
        isRound
        icon={<BiNetworkChart />}
        onClick={onOpen}
      />
      <Modaler
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        header="Dependencies"
      >
        <AddWaiting setStatus={setStatus} />
        {status === 'waiting' && (
          <Box mt={5}>
            {' '}
            <SearchInput
              value={input}
              placeholder="Search task by title"
              onChange={(e) => setInput(e.target.value)}
            />
            {tasks?.map((item: any) => {
              return (
                <TaskItemDepends
                  task={item}
                  key={item.id}
                  // setTaskDependId={setTaskDependId}
                  handleClick={handleClick}
                />
              )
            })}
          </Box>
        )}
        <AddBlocking setStatus={setStatus} />
        {status === 'blocking' && (
          <Box mt={5}>
            {' '}
            <SearchInput
              value={input}
              placeholder="Search task by title"
              onChange={(e) => setInput(e.target.value)}
            />
            {tasks?.map((item: any) => {
              return (
                <TaskItemDepends
                  task={item}
                  key={item.id}
                  // setTaskDependId={setTaskDependId}
                  handleClick={handleClick}
                />
              )
            })}
          </Box>
        )}
      </Modaler>
    </>
  )
}
