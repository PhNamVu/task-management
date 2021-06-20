import React from 'react'
import { Navigate } from 'react-router-dom'

import { Login } from '../../components/auth/Login'
import { VerifyEmail } from '../../components/auth/VerifyEmail'
import { SetupAccount } from '../../components/auth/SetupAccount'


export const LoginPage = (role: any) => {

  if (role === "nonUser") {
    return <Login />
  }
  if ( role === "nonVerifiedUser") {
    return <VerifyEmail />
  } 
  if (role === "noRoleUser") {
    return <SetupAccount />
  } 
  return <Navigate to="/w"/>
}
