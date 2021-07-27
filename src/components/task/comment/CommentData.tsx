import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { CommentItem } from './CommentItem'
export const CommentData: React.FC<{
  data: any
  loadMore: number
  // commentsCount: any
  // onLoadMore: any
  // height: any
  // numberOfCommentsLoadMore: any
  // isGoBottom: any
}> = ({
  data,
  loadMore,
  // commentsCount,
  // onLoadMore,
  // height,
  // numberOfCommentsLoadMore,
  // isGoBottom,
}) => {
  const count = data.comments_aggregate?.aggregate.count
  const length = data.comments?.length

  return (
    <Box h="100%" my={5} ml={5}>
      <Text color="grey" fontSize="sm">
        {data.owner.displayName} created this task{' '}
      </Text>
      {/* Load more */}
      {count > loadMore && length < count && length !== 0 && (
        <Flex
          alignItems="center"
          alignContent="center"
          color="grey"
          _hover={{ color: 'cyan.400', cursor: 'pointer' }}
        >
          <Icon as={BiChevronRight} my={2} />
          <Text fontSize="sm">
            {count - length < loadMore ? count - length : loadMore} more updates
          </Text>
        </Flex>
      )}

      <Flex flexDirection="column-reverse">
        {data?.comments?.map((item: any) => (
          <CommentItem key={item.id} comment={item} />
        ))}
      </Flex>
    </Box>
  )
}
