import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { shortString } from '../../helpers/shortString'
import { MotionBox } from '../motion/MotionBox'

interface Props {
  item?: any
}

export const TaskItem: React.FC<Props> = ({ item }) => {
  const location: any = useLocation()
  const bg = useColorModeValue('white', 'gray.600')
  return (
    <NavLink to={`${location.pathname}/${item.id}`}>
      <MotionBox
        mb={5}
        borderRadius={5}
        boxShadow="base"
        p={5}
        bg={bg}
        _hover={{ cursor: 'pointer', boxShadow: 'revert' }}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        <Text>{shortString(item?.title, 40)}</Text>
      </MotionBox>
    </NavLink>
  )
}
