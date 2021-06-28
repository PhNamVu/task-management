import React from 'react'
import { Flex, useDisclosure } from '@chakra-ui/react'
import { Modaler } from '../shared/Modaler'
import { AddBoardForm } from '../forms/AddBoardForm'

interface AddBoardButtonProps {
  id: string
}

export const AddBoardButton: React.FC<AddBoardButtonProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        bg="gray.400"
        height="80px"
        borderRadius="4px"
        justifyContent="center"
        alignItems="center"
        _hover={{ backgroundColor: 'gray.500' }}
        onClick={onOpen}
      >
        {' '}
        Create new board{' '}
      </Flex>
      <Modaler isOpen={isOpen} onClose={onClose} header="Create board">
        <AddBoardForm onClose={onClose} workspaceId={id} />
      </Modaler>
    </>
  )
}
