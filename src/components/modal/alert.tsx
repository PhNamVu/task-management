import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react'
import React, { RefObject } from 'react'

interface AlertModalProps {
  submit: () => void
  isOpen: boolean
  onClose: () => void
  cancelRef: RefObject<HTMLButtonElement> | undefined | any
  title: string
  message: string
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  cancelRef,
  submit,
  message,
  title,
}) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button
            colorScheme="red"
            ml={3}
            onClick={() => {
              submit()
              onClose()
            }}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
