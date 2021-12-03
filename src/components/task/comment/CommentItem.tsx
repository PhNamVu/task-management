import React from 'react'
import {
  Box,
  Flex,
  Text,
  Avatar,
  useColorModeValue,
  Icon,
  Link,
} from '@chakra-ui/react'
import { IoAttachOutline } from 'react-icons/io5'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useAuth } from '../../../hooks/use-auth'
import { formatDateHour } from '../../../helpers/formatDate'
import { ReadMoreText } from '../../shared/ReadMoreText'

export const CommentItem = ({ comment }: any) => {
  const bg = useColorModeValue('white', 'gray.600')
  const {
    state: { user },
  }: any = useAuth()
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
        {comment.attachments?.map((attachment: any) => (
          <div key={attachment.id}>
            <Flex alignItems="center" color="blue.500">
              <Icon
                as={IoAttachOutline}
                w={6}
                h={6}
                _hover={{ cursor: 'pointer' }}
              />
              <Link href={attachment.assetUrl} isExternal>
                {attachment.name} <ExternalLinkIcon mx="2px" />
              </Link>
            </Flex>
          </div>
        ))}
      </Box>
    </Flex>
  )
}
