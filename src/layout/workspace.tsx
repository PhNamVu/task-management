import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SimpleGrid } from '@chakra-ui/react'

import { Sidebar } from '../components/side-bar'
import { MotionBox } from '../components/motion/MotionBox'

export const WorkspaceLayout: React.FC<{ isUserLoggedin: boolean }> = ({
  isUserLoggedin,
}) => {
  if (isUserLoggedin) {
    return (
      <SimpleGrid columns={2} templateColumns='200px 1fr' h='100%'>
        <MotionBox
          h="100vh" 
          boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' 
          position="sticky"
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: 'linear' }}
        >
          <Sidebar/>
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
