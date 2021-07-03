import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ProgressLoading } from '../shared/Loading'
import { WorkspaceMember } from './Members'
import { WorkspaceSetting } from './WorkspaceSetting'
import { WorkspaceTitle } from './WorkspaceTitle'
import { Error } from '../shared/Error'
import { useGetWorkspaceDetailQuery } from '../../generated/hooks'
import { WorkspaceBoard } from './WorkspaceBoard'

interface WorkspaceItemProps {
  id: string
}

export const WorkspaceItem: React.FC<WorkspaceItemProps> = ({ id }) => {
  const { data, loading, error } = useGetWorkspaceDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  })
  if (loading) return <ProgressLoading />
  if (error) return <Error />

  const title = data?.detail[0].title || ''
  const members = data?.members
  const ownerId = data?.detail[0].ownerId || ''

  return (
    <Box mb={10}>
      <Flex w="100%" justifyContent="space-between" mb={3}>
        <WorkspaceTitle title={title} id={id} />
        <Flex>
          <WorkspaceMember id={id} members={members} />
          <WorkspaceSetting id={id} ownerId={ownerId} />
        </Flex>
      </Flex>
      <Box>
        <WorkspaceBoard id={id} />
      </Box>
    </Box>
  )
}
