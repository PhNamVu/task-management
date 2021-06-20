import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ApolloProvider } from '@apollo/client'

import { createClient } from "./apollo/create-client"
import { useAuth } from "./hooks/use-auth"
import { FallbackLoading } from "./components/activity/fall-back-loading"

/* layout */
import { AuthLayout } from "./layout/auth"
import { WorkspaceLayout } from "./layout/workspace"

/* pages */
import { LandingPage } from "./pages"
import { LoginPage } from "./pages/auth/LoginPage"
import { SignUpPage } from "./pages/auth/SignUpPage"
import { ForgotPasswordPage } from "./pages/auth/ForgotPassword"
import { NotFoundPage } from "./pages/NotFoundPage"
import WorkspacePage from "./pages/workspace"



export const App = () => {
  const { state }: any = useAuth()
  const [client, role, isUserLoggedin] = createClient(state)
  console.log(role, isUserLoggedin)
  return (
    <Suspense fallback={<FallbackLoading />}>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/"  element={<LandingPage isUserLoggedin={isUserLoggedin}/>}/>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={LoginPage(role)} />
            <Route path="sign-up" element={SignUpPage(role)} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="/w" element={<WorkspaceLayout isUserLoggedin={isUserLoggedin}/>}>
            <Route path="/" element={<WorkspacePage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ApolloProvider>
    </Suspense>
  )
}
