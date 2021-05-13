import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { FallbackLoading } from "./components/activity/fall-back-loading"
import { LoginPage } from "./pages/LoginPage"


export const App = () => (
  <Suspense fallback={<FallbackLoading />}>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Suspense>
);
