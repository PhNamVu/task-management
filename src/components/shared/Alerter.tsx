import { Alert, AlertIcon, AlertProps } from '@chakra-ui/react'
import React from 'react'

export const Alerter: React.FC<AlertProps> = ({ children, ...props }) => {
  return (
    <Alert {...props} variant="left-accent">
      <AlertIcon />
      {children}
    </Alert>
  )
}
