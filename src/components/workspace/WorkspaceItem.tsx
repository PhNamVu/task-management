import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ProgressLoading } from '../shared/Loading'
import { WorkspaceMember } from './Members'
import { WorkspaceSetting } from './WorkspaceSetting'
import { WorkspaceTitle } from './WorkspaceTitle'
import { Error } from '../shared/Error'
import { useGetWorkspaceDetailQuery } from '../../generated/hooks'

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

  const total = data?.total.aggregate?.count || 0
  const title = data?.detail[0].title || ''
  const status = data?.detail[0].status || ''
  return (
    <Box mb={10}>
      <Flex w="100%" justifyContent="space-between" mb={3}>
        <WorkspaceTitle title={title} />
        <Flex>
          <WorkspaceMember total={total} />
          <WorkspaceSetting status={status} id={id} />
        </Flex>
      </Flex>
    </Box>
  )
}
