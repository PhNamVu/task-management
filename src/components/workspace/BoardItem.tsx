import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface BoardItemProps {
  id: string
  title: string
}

export const BoardItem: React.FC<BoardItemProps> = ({ id, title }) => {
  const navigate = useNavigate()

  const color = useColorModeValue('rgba(27, 31, 35, 0.15)', '#FFFFFF')
  return (
    <Flex
      height="80px"
      borderRadius="4px"
      justifyContent="center"
      alignItems="center"
      _hover={{
        border: '1px solid #0BC5EA',
        cursor: 'pointer',
        color: '#0BC5EA',
      }}
      // border={`1px solid ${color}`}
      onClick={() => navigate(`/b/${id}`)}
      boxShadow={`${color} 0px 1px 3px 0px, ${color} 0px 0px 0px 1px;`}
    >
      {title}
    </Flex>
  )
}
