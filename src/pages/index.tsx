import React from 'react'
import { Navigate } from 'react-router-dom'
import { ContentLanding } from '../components/ContentLanding'
import { Header } from '../components/Header'

export const LandingPage: React.FC<{ isUserLoggedin: boolean }> = ({
  isUserLoggedin,
}) => {
  if (isUserLoggedin) {
    return <Navigate to="/w" />
  }
  return (
    <>
      <Header />
      <ContentLanding />
    </>
  )
}
