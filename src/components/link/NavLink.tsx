import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { chakra, Flex } from '@chakra-ui/react'

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
          fontWeight: 'bold'      
        }}
        style={{
          width:'100%',
          padding: '5px',
          borderRadius: '5px', 
          marginBottom: '1em',
          
        }}
      >
        <Flex alignItems="flex-end" pl={5}>
          <chakra.div mr={2}>
            {icon}
          </chakra.div>
          {label}
        </Flex>
      </NavLink>
  )
}
