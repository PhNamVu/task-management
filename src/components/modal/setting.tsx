import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import React from 'react'

import { AvatarSetting } from '../setting/AvatarSetting'

export const SettingModal = ({ isOpen, onClose }: any) => {
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
        <ModalHeader>Account setting</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AvatarSetting />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
