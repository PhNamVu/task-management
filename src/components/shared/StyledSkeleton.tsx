import { Stack, Skeleton } from '@chakra-ui/react'
import React from 'react'

export const StyledSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="12px" />
      <Skeleton height="12px" />
      <Skeleton height="12px" />
    </Stack>
  )
}
