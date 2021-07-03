import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'

import { createClient } from './apollo/create-client'
import { useAuth } from './hooks/use-auth'
import { FallbackLoading } from './components/activity/fall-back-loading'

/* layout */
import { AuthLayout } from './layout/auth'
import { WorkspaceLayout } from './layout/workspace'
import { BoardLayout } from './layout/board'

/* pages */
import { LandingPage } from './pages'
import { LoginPage } from './pages/auth/LoginPage'
import { SignUpPage } from './pages/auth/SignUpPage'
import { ForgotPasswordPage } from './pages/auth/ForgotPassword'
import { NotFoundPage } from './pages/NotFoundPage'
import WorkspacePage from './pages/workspace'
import BoardDetailPage from './pages/board/[Id]'
import WorkspaceDetail from './pages/workspace/[Id]'

export const App = () => {
  const { state }: any = useAuth()
  const [client, role, isUserLoggedin] = createClient(state)
  if (!state.user)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    )
  return (
    <Suspense fallback={<FallbackLoading />}>
      <ApolloProvider client={client}>
        <Routes>
          <Route
            path="/"
            element={<LandingPage isUserLoggedin={isUserLoggedin} />}
          />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={LoginPage(role)} />
            <Route path="sign-up" element={SignUpPage(role)} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route
            path="/w"
            element={<WorkspaceLayout isUserLoggedin={isUserLoggedin} />}
          >
            <Route path="/" element={<WorkspacePage />} />
            <Route path="/:id" element={<WorkspaceDetail />} />
          </Route>
          <Route
            path="/b"
            element={<BoardLayout isUserLoggedin={isUserLoggedin} />}
          >
            <Route path=":id" element={<BoardDetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ApolloProvider>
    </Suspense>
  )
}
