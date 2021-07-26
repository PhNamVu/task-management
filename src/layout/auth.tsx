import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/use-auth'

export const AuthLayout = () => {
  const { state }: any = useAuth()
  const navigate = useNavigate()
  const { state: locationState } = useLocation() as any
  const isRedirect = localStorage.getItem('isRedirect')
  useEffect(() => {
    if (
      state.customClaims &&
      Object.prototype.hasOwnProperty.call(state, 'https://hasura.io/jwt/claims')
    ) {
      const role =
        state.customClaims.claims['https://hasura.io/jwt/claims'][
          'x-hasura-default-role'
        ]
      if (
        (state.user.emailVerified && role === 'user') 
      ) {
        localStorage.removeItem('isRedirect')
        navigate('/')
      }
      if (isRedirect && state.user.emailVerified && role === 'user') {
        localStorage.removeItem('isRedirect')
        navigate(isRedirect)
      }

      if (state.user.emailVerified && role === 'admin') {
        localStorage.removeItem('isRedirect')
        navigate('/admin')
      }


      if (locationState && locationState.isRedirectToPassword) {
        navigate('/settings/change-password')
      }

    }
  }, [state, navigate, isRedirect, locationState])
  return (
    <>
      <motion.div
        animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        <Outlet />
      </motion.div>
    </>
  )
}
