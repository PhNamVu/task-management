import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdDoNotDisturbOn } from 'react-icons/md'
import { GoPlusSmall } from 'react-icons/go'

interface Props {
  setStatus: any
}

export const AddBlocking: React.FC<Props> = ({ setStatus }) => {
  return (
    <Box
      mt={5}
      borderColor="red.200"
      borderWidth="1px 1px 1px 3px"
      borderStyle="solid"
      p={5}
      backgroundColor="red.50"
    >
      <Flex color="red.400">
        <Icon as={MdDoNotDisturbOn} mr={2} />
        <Heading as="h5" size="xs" textTransform="uppercase">
          blocking
        </Heading>
      </Flex>
      <Text fontSize="sm" mt={1} color="gray" fontStyle="italic">
        Tasks that must be done before this task
      </Text>
      <Flex
        alignItems="center"
        color="cyan.400"
        mt={1}
        onClick={() => setStatus('blocking')}
      >
        <Icon as={GoPlusSmall} />
        <Text fontSize="sm" cursor="pointer">
          Tasks that can&apos;t start until this is completed
        </Text>
      </Flex>
    </Box>
  )
}
