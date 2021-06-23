import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Error = () => {
  return (
    <Box mb={10}>
      <Heading as="h3" size="md" color="red.500">
        You ran into an error
      </Heading>
      <Text color="red.600">
        Please try again. If you still run into error. Report us !
      </Text>
    </Box>
  )
}
