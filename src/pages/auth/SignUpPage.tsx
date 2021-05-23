import React from 'react'
import { Navigate } from 'react-router-dom'

import { SetupAccount } from '../../components/auth/SetupAccount'
import { SignUp } from '../../components/auth/SignUp'
import { VerifyEmail } from '../../components/auth/VerifyEmail'


export const SignUpPage = (role : string) => {
  if (role === "nonUser") {
    return <SignUp />
  } 
  if ( role === "nonVerifiedUser") {
    return <VerifyEmail />
  }
  if (role === "noRoleUser") {
    return <SetupAccount />
  }
  return <Navigate to="/"/>
}
