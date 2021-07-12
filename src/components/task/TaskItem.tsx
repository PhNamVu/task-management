import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { shortString } from '../../helpers/shortString'

export const TaskItem = (props: any) => {
  const bg = useColorModeValue('white', 'gray.600')
  return (
    <Box
      borderRadius={5}
      boxShadow="base"
      p={5}
      bg={bg}
      _hover={{ cursor: 'pointer', boxShadow: 'revert' }}
    >
      <Text>
        {shortString(
          ' Dolor occaecat ullamco proident minim magna enim Dolor occaecat ullamco proident minim magna enim .',
          30
        )}
      </Text>
    </Box>
  )
}
