import React from 'react'
import {
  IconButton,
  Flex,
  Image,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from '@chakra-ui/react'
import { BsBellFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

export const BoardNavigation = () => {
  const {
    state: { user },
    signout,
  }: any = useAuth()
  const navigate = useNavigate()
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      mx={3}
    >
      <Flex
        alignItems="center"
        onClick={() => navigate('/w')}
        _hover={{ cursor: 'pointer' }}
      >
        <Image h="2.5em" w="2.5em" src="/assets/logo.svg" mr="0.5rem" />
        <Heading as="h3" size="md">
          Birdy
        </Heading>
      </Flex>
      <Flex>
        <Menu>
          <MenuButton>
            <Avatar name={user.displayName} src={user?.photoURL} size="sm" />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                color="red.500"
                _hover={{ textDecoration: 'underline' }}
                onClick={() => {
                  signout()
                  navigate('/')
                }}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <ColorModeSwitcher />
        <IconButton ml={2} isRound aria-label="Home" icon={<BsBellFill />} />
      </Flex>
    </Flex>
  )
}
