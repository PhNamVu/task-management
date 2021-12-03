import { Button, MenuButton } from '@chakra-ui/react'
import React from 'react'
import { BoardStatus } from '../../constants/board'

interface StatusButtonProps {
  status: any
}

export const StatusButton: React.FC<StatusButtonProps> = ({ status }) => {
  const colorScheme = (sta: any) => {
    switch (sta) {
      case BoardStatus.INPROGRESS:
        return 'blue'
      case BoardStatus.DONE:
        return 'green'
      default:
        return 'teal'
    }
  }

  return (
    <MenuButton
      as={Button}
      colorScheme={colorScheme(status)}
      variant="outline"
      textTransform="uppercase"
      size="xs"
    >
      {status}
    </MenuButton>
  )
}
