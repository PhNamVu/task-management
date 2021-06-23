import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { getInitials } from '../../helpers/getInitial'

interface WorkspaceTitleProps {
  title: string
}

export const WorkspaceTitle: React.FC<WorkspaceTitleProps> = ({ title }) => {
  return (
    <Flex alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="green.400"
        border="InfoText"
        borderRadius={4}
        mr={3}
        color="white"
        width={12}
      >
        <Heading as="h2" size="xl">
          {getInitials(title)}
        </Heading>
      </Flex>
      <Heading as="h3" size="md">
        {title}
      </Heading>
    </Flex>
  )
}
