import { chakra, Flex, Icon } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FaTrello } from 'react-icons/fa'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { NavLink, useParams } from 'react-router-dom'
import { AiTwotoneCalendar } from 'react-icons/ai'

interface NavLinkProps {
  href: string
  label?: string
  icon: ReactNode
}

export const StyledNavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  icon,
}) => {
  return (
    <NavLink
      end
      to={href}
      activeStyle={{
        color: '#0BC5EA',
        fontWeight: 'bold',
      }}
      style={{
        width: '100%',
        borderRadius: '5px',
      }}
    >
      <Flex pl={5}>
        <chakra.div mr={2}>{icon}</chakra.div>
        {label}
      </Flex>
    </NavLink>
  )
}
export const BoardTabMenu = () => {
  const { id } = useParams()
  return (
    <Flex>
      <StyledNavLink
        label="Board"
        href={`/b/${id}`}
        icon={<Icon as={FaTrello} w={4} h={4} />}
      />
      <StyledNavLink
        label="Charts"
        href={`/b/${id}/charts`}
        icon={<Icon as={RiBarChartHorizontalFill} w={4} h={4} />}
      />
      <StyledNavLink
        label="Schedule"
        href={`/b/${id}/schedule`}
        icon={<Icon as={AiTwotoneCalendar} w={4} h={4} />}
      />
    </Flex>
  )
}
