import { Avatar, AvatarProps, Tooltip } from '@chakra-ui/react'
import React from 'react'

export const StyledAvatar: React.FC<AvatarProps> = ({
  name,
  src,
  ...props
}) => {
  return (
    <Tooltip label={name} placement="auto">
      <Avatar {...props} name={name} src={src} />
    </Tooltip>
  )
}
