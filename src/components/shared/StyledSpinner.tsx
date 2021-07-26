import { Spinner, SpinnerProps } from '@chakra-ui/react'
import React from 'react'

export const StyledSpinner = ({ ...props }: SpinnerProps) => {
  return (
    <Spinner
      {...props}
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
}
