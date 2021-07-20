import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../../helpers/formatDate'

interface Props {
  date: Date
  title: string
  isReadOnly?: boolean
}

export const DateDisplay: React.FC<Props> = ({
  date,
  title,
  isReadOnly = false,
}) => {
  return (
    <Flex flexDirection="column" cursor={isReadOnly ? 'text' : 'pointer'}>
      <Text fontSize="md">{title}</Text>
      <Text fontSize="sm" color="gray.500" isTruncated>
        {formatDate(date)}
      </Text>
    </Flex>
  )
}
