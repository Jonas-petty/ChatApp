import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from "firebase/auth"

import { app } from "./firebase"
import Chat from "./components/Chat/Chat"
import SignIn from "./components/SignIn/SignIn"


function App() {
  const auth = getAuth(app)
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  )
}

export default App
