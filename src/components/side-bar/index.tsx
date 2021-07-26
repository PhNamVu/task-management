import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Menu } from './Menu'

export const Sidebar = () => {
  return (
    <Flex h="100%" direction="column" alignItems="flex-start" w="100%">
      <Flex my={5} ml={5} alignItems="center" >
        <Image h="2.5em" w="2.5em" src="/assets/logo.svg" />
        <Heading as="h3" size="md" ml={3}>
          Birdy
        </Heading>
      </Flex>
      <Menu />
    </Flex>
  )
}
