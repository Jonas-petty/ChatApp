import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router } from 'react-router-dom'

import { auth } from "./firebase"
import MainRoutes from "./routes"
import { GlobalStyle } from "./styles"

import Chat from "./pages/Chat/index"


export default function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <Router>
        <GlobalStyle />
        {user ? <Chat /> : <MainRoutes />}
      </Router>
    </>
  )
}