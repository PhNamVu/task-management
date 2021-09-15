import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdDoNotDisturbOn } from 'react-icons/md'
import { GoPlusSmall } from 'react-icons/go'

export const AddWaiting = () => {
  return (
    <Box
      borderColor="yellow.200"
      borderWidth="1px 1px 1px 3px"
      borderStyle="solid"
      p={5}
      backgroundColor="yellow.50"
    >
      <Flex color="yellow.400">
        <Icon as={MdDoNotDisturbOn} mr={2} />
        <Heading as="h5" size="xs" textTransform="uppercase">
          waiting on
        </Heading>
      </Flex>
      <Text fontSize="sm" mt={1} color="gray" fontStyle="italic">
        Tasks that must be done before this task
      </Text>
      <Flex alignItems="center" color="cyan.400" mt={1}>
        <Icon as={GoPlusSmall} />
        <Text fontSize="sm" cursor="pointer">
          Tasks that must be done before this task
        </Text>
      </Flex>
    </Box>
  )
}
