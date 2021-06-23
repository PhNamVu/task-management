import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react'

interface ModalerProps extends ModalProps {
  header?: string
}

export const Modaler: React.FC<ModalerProps> = ({
  header = '',
  ...props
}: ModalerProps) => {
  const { onClose, isOpen, children } = props
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={5}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
