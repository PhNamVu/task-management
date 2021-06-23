import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import { Sidebar } from '../components/side-bar'
import { MotionBox } from '../components/motion/MotionBox'

export const WorkspaceLayout: React.FC<{ isUserLoggedin: boolean }> = ({
  isUserLoggedin,
}) => {
  const bg = useColorModeValue('#F7F6F3', 'gray.700')
  if (isUserLoggedin) {
    return (
      <SimpleGrid columns={2} templateColumns="200px 1fr" h="100vh">
        <MotionBox
          h="100%"
          bg={bg}
          position="sticky"
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: 'linear' }}
        >
          <Sidebar />
        </MotionBox>

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
