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
  size = 'xl',
  ...props
}: ModalerProps) => {
  const { onClose, isOpen, children } = props
  return (
    <Modal
      {...props}
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
      size={size}
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
