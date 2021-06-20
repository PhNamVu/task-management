import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React from 'react'

interface AlertProps {
  message: string
  title?: string
  status: 'success' | 'warning' | 'error' | 'info'
}

export const StyledAlert: React.FC<AlertProps> = ({
  message,
  title,
  status,
}) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription display="block">
          {message}
        </AlertDescription>
      </Box>
    </Alert>
  )
}
