import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, chakra, Flex, Heading, Image } from '@chakra-ui/react'
import { PrimaryBtn } from './shared/PrimaryBtn'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export const Header = () => {
  return (
    <chakra.header
      w="100%"
      webkitPositon="sticky"
      position="sticky"
      top="0px"
      left="0px"
      right="0px"
      zIndex={3}
    >
      <Box
        height="4.5rem"
        marginInlineStart="auto"
        marginInlineEnd="auto"
        mx="2rem"
      >
        <Flex
          alignItems="center"
          webkitBoxAlign="center"
          webkitBoxPack="justify"
          justifyContent="space-between"
          w="100%"
          h="100%"
        >
          <Box>
            <NavLink to="/">
              <Flex alignItems="center">
                <Image h="2.5em" w="2.5em" src="/assets/logo.svg" mr="0.5rem" />
                <Heading as="h3" size="md">
                  Birdy
                </Heading>
              </Flex>
            </NavLink>
          </Box>
          <Flex
            w="100%"
            webkitBoxAlign="center"
            webkitBoxPack="end"
            alignItems="center"
            justifyContent="flex-end"
          >
            <ColorModeSwitcher variant="steal" />
            <NavLink to="/auth/login">
              <PrimaryBtn
                ml="1.5rem"
                variant="outline"
                _hover={{ opacity: '0.5' }}
              >
                Login
              </PrimaryBtn>
            </NavLink>
            <NavLink to="/auth/sign-up">
              <PrimaryBtn ml="1rem">Sign up</PrimaryBtn>
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </chakra.header>
  )
}
