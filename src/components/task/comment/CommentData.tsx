import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { CommentItem } from './CommentItem'
export const CommentData: React.FC<{
  data: any
  loadMore: number
  onLoadMore: any
  isGoBottom: any
}> = ({
  data,
  loadMore,
  onLoadMore,

  isGoBottom,
}) => {
  const count = data.comments_aggregate?.aggregate.count
  const length = data.comments?.length
  const msgScroll = React.useRef<any>(null)

  React.useEffect(() => {
    if (isGoBottom === true) {
      goBottom()
    }
  })

  const goBottom = () => {
    msgScroll.current.scrollIntoView()
  }

  return (
    <Box h="100%" my={5} ml={5}>
      <Text color="grey" fontSize="sm">
        {data.owner.displayName} created this task{' '}
      </Text>
      {/* Load more */}
      {count > loadMore && length < count && length !== 0 && (
        <Flex
          onClick={onLoadMore}
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
      <div ref={msgScroll} />
    </Box>
  )
}
