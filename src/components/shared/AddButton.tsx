import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

interface AddButtonProps {
  onClick: () => void
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      ml={5}
      onClick={onClick}
      aria-label="Search database"
      isRound
      icon={<AddIcon />}
    />
  )
}
