import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

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
import BoardDetailPage from './pages/board/Id'
import WorkspaceDetail from './pages/workspace/[Id]'
import { BoardViewPage } from './pages/board/Id/board'
import { GanttViewPage } from './pages/board/Id/gantt'

export const App = () => {
  const { state }: any = useAuth()
  const [client, role, isUserLoggedin] = createClient(state)

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
            <Route path=":id" element={<BoardDetailPage />}>
              <Route path="/" element={<BoardViewPage />} />
              <Route path="/gantt" element={<GanttViewPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ApolloProvider>
    </Suspense>
  )
}
