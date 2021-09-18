import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

interface SearchInputProps extends InputProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const SearchInput: React.FC<SearchInputProps> = ({
  size = 'md',
  ...props
}) => {
  return (
    <InputGroup size={size}>
      <InputLeftElement pointerEvents="none">
        <BiSearch color="gray" />
      </InputLeftElement>
      <Input borderRadius={5} type="text" {...props} />
    </InputGroup>
  )
}
