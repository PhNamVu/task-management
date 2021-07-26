import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { SimpleGrid, Flex } from '@chakra-ui/react'

import { BoardNavigation } from '../components/board/navigation'
import { useAuth } from '../hooks/use-auth'
import { StyledSpinner } from '../components/shared/StyledSpinner'

export const BoardLayout: React.FC<{ isUserLoggedin: boolean }> = ({
  isUserLoggedin,
}) => {
  const { state }: any = useAuth()

  if (!state.user) return <StyledSpinner />
  if (isUserLoggedin) {
    return (
      <SimpleGrid columns={1} templateRows="50px 1fr">
        <Flex w="100%" alignItems="center" borderBottom="0.5px solid #E2E8F0">
          <BoardNavigation />
        </Flex>

        <div>
          <Outlet />
        </div>
      </SimpleGrid>
    )
  }
  return <Navigate to="/auth/login" />
}
