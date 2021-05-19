import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ApolloProvider } from '@apollo/client'
import { createClient } from "./apollo/create-client"

import { useAuth } from "./hooks/use-auth"
import { FallbackLoading } from "./components/activity/fall-back-loading"

/* pages */

import { LandingPage } from "./pages"
import { AuthLayout } from "./layout/auth"
import { LoginPage } from "./pages/auth/LoginPage"
import { SignUpPage } from "./pages/auth/SignUpPage"
import { ForgotPasswordPage } from "./pages/auth/ForgotPassword"
import { NotFoundPage } from "./pages/NotFoundPage"


export const App = () => {
  const { state }: any = useAuth()
  const [client, role, isUserLoggedin] = createClient(state)
  console.log(role, isUserLoggedin)
  return (
    <Suspense fallback={<FallbackLoading />}>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ApolloProvider>
    </Suspense>
  )
}
