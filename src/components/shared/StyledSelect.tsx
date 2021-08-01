import React from 'react'
import { Select, SelectProps } from '@chakra-ui/react'

export const StyledSelect = ({ ...props }: SelectProps) => {
  return <Select {...props} focusBorderColor="cyan.400" variant="outline" />
}
