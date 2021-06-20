import { chakra, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { HiHome } from 'react-icons/hi'
import { MdSettings } from 'react-icons/md'
import { FaTrello } from 'react-icons/fa'
import useDisclosure from '@chakra-ui/core/dist/useDisclosure'

import { StyledNavLink } from '../link/NavLink'
import { SettingModal } from '../modal/setting'

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        h="100%"
        direction="column"
        alignItems="flex-start"
        w="99.5%"
        mt={5}
      >
        <StyledNavLink
          label="Home"
          href="/w"
          icon={<Icon as={HiHome} w={6} h={6} />}
        />
        <Flex
          alignItems="center"
          pl={5}
          ml={1}
          mb={2}
          onClick={onOpen}
          cursor="pointer"
        >
          <chakra.div mr={2}>
            <Icon as={MdSettings} w={6} h={6} />
          </chakra.div>
          Setting
        </Flex>
        <StyledNavLink
          label="Boards"
          href="/w/"
          icon={<Icon as={FaTrello} w={6} h={6} />}
        />
      </Flex>
      <SettingModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
