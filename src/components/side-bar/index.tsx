import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Menu } from './Menu'


export const Sidebar = () => {
  return (
    <Flex h="100%" direction="column" alignItems="flex-start" w="100%" >
      <Image h="2.5em" w="2.5em" src="/assets/logo.svg" my={5} ml={5}/>
      <Menu /> 
    </Flex>
  )
}
