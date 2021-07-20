import { EditIcon } from '@chakra-ui/icons'
import FocusLock from 'react-focus-lock'
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  Button,
  useDisclosure,
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import React from 'react'

// 1. Create a text input component
const TextInput = React.forwardRef(({ props, ref }: any) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

// 2. Create the form
const Form = ({ firstFieldRef, onCancel }: any) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label="First name"
        id="first-name"
        ref={firstFieldRef}
        defaultValue="John"
      />
      <TextInput label="Last name" id="last-name" defaultValue="Smith" />
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme="teal">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export const EditDate = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)
  return (
    <>
      <Box d="inline-block" mr={3}>
        John Smith
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton aria-label="edit" size="sm" icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}
