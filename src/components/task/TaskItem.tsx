import { AvatarGroup, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { shortString } from '../../helpers/shortString'
import { MotionBox } from '../motion/MotionBox'
import { StyledAvatar } from '../shared/StyledAvatar'

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
        transition={{ duration: 0.25, ease: 'linear' }}
      >
        <Text>{shortString(item?.title, 40)}</Text>
        <Flex justifyContent="flex-end" mt={2}>
          <AvatarGroup size="sm" max={3}>
            {item.assignee?.map((assignee: any) => (
              <StyledAvatar
                key={assignee.id}
                name={assignee.user.displayName}
                src={assignee.user.photoUrl}
              />
            ))}
          </AvatarGroup>
        </Flex>
      </MotionBox>
    </NavLink>
  )
}
