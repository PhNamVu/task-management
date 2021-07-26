import { Tag, TagCloseButton, TagLabel, TagProps } from '@chakra-ui/react'
import React from 'react'

interface TagerProps extends TagProps {
  onClose?: () => void
}

export const Tager: React.FC<TagerProps> = ({
  children,
  variant = 'outline',
  onClose,
  ...props
}) => {
  return (
    <Tag {...props} variant={variant} colorScheme="blue">
      <TagLabel> {children}</TagLabel>
      <TagCloseButton onClick={onClose} />
    </Tag>
  )
}
