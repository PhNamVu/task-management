import React from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'


export const AuthLayout = () => {
    return (
        <>
            <motion.div
                animate={{ x: [1000, 0] }}
                transition={{ duration: 0.5, ease: "linear" }}
            >
                <Outlet/>
            </motion.div>
        </>
    )
}