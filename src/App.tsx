import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ApolloProvider } from '@apollo/client'
import { createClient } from "./apollo/create-client"

import { useAuth } from "./hooks/use-auth"
import { FallbackLoading } from "./components/activity/fall-back-loading"

import { LoginPage } from "./pages/LoginPage"


export const App = () => {
  const { state }: any = useAuth()
  const [client, role, isUserLoggedin] = createClient(state)
  console.log(role, isUserLoggedin)
  return (
    <Suspense fallback={<FallbackLoading />}>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </ApolloProvider>
    </Suspense>
  )
}
