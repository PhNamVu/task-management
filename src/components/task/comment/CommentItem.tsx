import React from 'react'
import { Box, Flex, Text, Avatar, useColorModeValue } from '@chakra-ui/react'
import { useAuth } from '../../../hooks/use-auth'
import { formatDateHour } from '../../../helpers/formatDate'
import { ReadMoreText } from '../../shared/ReadMoreText'

export const CommentItem = ({ comment }: any) => {
  const bg = useColorModeValue('white', 'gray.600')
  const {
    state: { user },
  }: any = useAuth()
  console.log(comment.user.photoURL)
  return (
    <Flex mb={8}>
      <Box mr={2}>
        <Avatar
          name={comment.user.displayName}
          src={comment.user.photoUrl}
          size="sm"
        />
      </Box>
      <Box
        bg={bg}
        w="100%"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        py={2}
        px={3}
        borderRadius={5}
      >
        <Flex alignItems="center" justifyContent="space-between" mb={2}>
          <Flex>
            <Text fontSize="sm" fontWeight="500">
              {user.displayName === comment.user.displayName
                ? 'You'
                : comment.user.displayName}
            </Text>
          </Flex>
          <Text ml={2} color="gray.400" fontSize="sm">
            {formatDateHour(new Date(comment.createdAt))}
          </Text>
        </Flex>

        <ReadMoreText text={comment?.text} limit={30} />
      </Box>
    </Flex>
  )
}
