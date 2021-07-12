import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { NewTaskButton } from '../task/NewTaskButton'
import { TaskItem } from '../task/TaskItem'

interface Props {
  title: string
  code: number
  //   children: React.ReactNode
}

export const CardBoard: React.FC<Props> = ({ code, title }) => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  return (
    <Box bg={bg} p={6} borderRadius={5}>
      <Flex alignItems="center" justifyContent="space-between" mb={5}>
        <Heading as="h5" size="sm">
          {title}
        </Heading>

        <NewTaskButton code={code} />
      </Flex>
      <TaskItem />
    </Box>
  )
}
