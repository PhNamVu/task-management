import { IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconButtonProps {
  label: string
}

export const ToolTipIconButton: React.FC<Props> = ({
  label,
  icon,
  ...props
}) => {
  return (
    <Tooltip label={label} placement="auto">
      <IconButton {...props} aria-label={label} icon={icon} />
    </Tooltip>
  )
}
