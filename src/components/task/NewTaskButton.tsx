import { Button, ButtonProps, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { AddTaskForm } from '../forms/AddTask'
import { Modaler } from '../shared/Modaler'

interface Props extends ButtonProps {
  code: number
}

export const NewTaskButton: React.FC<Props> = ({ code }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<IoMdAdd />}
        size="sm"
        colorScheme="green"
      >
        Task
      </Button>
      <Modaler
        isOpen={isOpen}
        onClose={onClose}
        header="Create new task"
        size="2xl"
      >
        <AddTaskForm onClose={onClose} />
      </Modaler>
    </>
  )
}
