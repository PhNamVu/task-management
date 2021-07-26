import { Button, MenuButton } from '@chakra-ui/react'
import React from 'react'

interface StatusButtonProps {
  code: any
}

export const MenuTaskButton: React.FC<StatusButtonProps> = ({ code }) => {
  const colorScheme = (c: any) => {
    switch (c) {
      case '1':
        return 'blue'
      case '2':
        return 'yellow'
      case '3':
        return 'green'
      default:
        return 'teal'
    }
  }
  const getStatusName = (c: any) => {
    switch (c) {
      case '1':
        return 'todo'
      case '2':
        return 'in progress'
      case '3':
        return 'done'
      default:
        return 'archive'
    }
  }

  return (
    <MenuButton
      as={Button}
      colorScheme={colorScheme(code)}
      //   variant="outline"
      textTransform="uppercase"
      size="sm"
    >
      {getStatusName(code)}
    </MenuButton>
  )
}
