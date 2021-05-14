import React from 'react'
import { ClipLoader } from 'react-spinners'
import { Button, ButtonProps } from '@chakra-ui/react'

export const PrimaryBtn = ({ children, ...props } : ButtonProps) => {
  return (
    <Button
      colorScheme="linkedin"
      spinner={<ClipLoader size={20} color="black" />}
      {...props}
    >
      {children}
    </Button>
  )
}
