import React from "react";
import { getAuth } from 'firebase/auth'

import { app } from '../../firebase'
import { SignOutButton } from "./SignOutStyle";

export default function SignOut() {
    const auth = getAuth(app)
    return (
        <>
            <SignOutButton onClick={() => auth.signOut()}>Sair</SignOutButton>
        </>
    )
}