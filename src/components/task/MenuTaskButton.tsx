import { Button, MenuButton } from '@chakra-ui/react'
import React from 'react'
import { colorScheme } from '../../helpers/colorScheme'
import { getStatusName } from '../../helpers/getStatusName'

interface StatusButtonProps {
  code: any
}

export const MenuTaskButton: React.FC<StatusButtonProps> = ({ code }) => {
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
