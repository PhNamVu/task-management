import { Avatar, AvatarGroup, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { ProgressLoading } from '../../components/shared/Loading'
import { AddMember } from '../../components/workspace/AddMember'
import { useGetWorkspaceDetailQuery } from '../../generated/hooks'
import { NotFoundError } from '../../helpers/notFoundError'

const WorkspaceDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetWorkspaceDetailQuery({
    variables: {
      id,
    },
  })
  if (loading) return <ProgressLoading />
  if (error || data?.detail.length === 0) {
    throw new NotFoundError('Not found workspace')
  }
  console.log(data)
  const detail = data && data.detail[0]
  return (
    <>
      <Helmet>
        <title>{detail?.title} | Birdy</title>
      </Helmet>
      <Box w="100%">
        <Flex w="100%" justifyContent="center">
          <Heading as="h3" size="xl" mt={2} mb={10}>
            {detail?.title}
          </Heading>
        </Flex>
        <Flex ml={2} mb={10}>
          <Text fontSize="lg" mr={3}>
            Members:
          </Text>
          <AvatarGroup size="sm" max={2}>
            {data?.members.map((item: any) => {
              return (
                <Avatar
                  key={item.user.id}
                  name={item.user.displayName}
                  src={item.user.photoUrl}
                />
              )
            })}
          </AvatarGroup>
        </Flex>
        <AddMember />
      </Box>
    </>
  )
}

export default WorkspaceDetail
