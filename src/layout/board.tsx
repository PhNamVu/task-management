import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { BoardNavigation } from '../components/board/navigation'

export const BoardLayout: React.FC<{ isUserLoggedin: boolean }> = ({
  isUserLoggedin,
}) => {
  if (isUserLoggedin) {
    return (
      <SimpleGrid columns={1} templateRows="50px 1fr">
        <Flex w="100%" alignItems="center" borderBottom="0.5px solid #E2E8F0">
          <BoardNavigation />
        </Flex>

        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'linear', delay: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </SimpleGrid>
    )
  }
  return <Navigate to="/auth/login" />
}
