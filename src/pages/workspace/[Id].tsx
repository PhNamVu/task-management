import { AvatarGroup, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { EditableText } from '../../components/shared/EditableText'

import { ProgressLoading } from '../../components/shared/Loading'
import { StyledAvatar } from '../../components/shared/StyledAvatar'
import { AddMember } from '../../components/workspace/AddMember'
import {
  useGetWorkspaceDetailQuery,
  useUpdateWorkspaceMutation,
} from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'
import { useAuth } from '../../hooks/use-auth'

const WorkspaceDetail = () => {
  const { state }: any = useAuth()
  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]
  const { id } = useParams()
  const { data, loading, error } = useGetWorkspaceDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  })
  const [updateWorkspace] = useUpdateWorkspaceMutation()
  if (loading) return <ProgressLoading />
  if (error || data?.detail.length === 0) {
    throw new NotFoundError('Not found workspace')
  }
  const detail = data && data.detail[0]
  const isOwner = userId === detail?.ownerId
  return (
    <>
      <Helmet>
        <title>{detail?.title} | Birdy</title>
      </Helmet>
      <Box>
        <Flex w="100%" justifyContent="center">
          <EditableText
            defaultValue={detail?.title}
            my={5}
            mr={5}
            fontWeight="bold"
            fontSize="2xl"
            placeholder="Input title"
            onSubmit={(e: string) => {
              updateWorkspace({
                variables: {
                  id,
                  object: {
                    title: e.length > 0 ? e : 'untitled',
                  },
                },
              })
            }}
          />
        </Flex>

        <Flex ml={2} mb={10}>
          <Text fontSize="lg" mr={3}>
            Members:
          </Text>
          <AvatarGroup size="sm" max={3}>
            {data?.members.map((item: any) => {
              return (
                <StyledAvatar
                  key={item.user.id}
                  name={item.user.displayName}
                  src={item.user.photoUrl}
                />
              )
            })}
          </AvatarGroup>
        </Flex>
        {isOwner && <AddMember />}
      </Box>
    </>
  )
}

export default WorkspaceDetail
