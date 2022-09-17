import React from "react";
import { getAuth } from 'firebase/auth'

import { app } from '../../firebase'

export default function SignOut() {
    const auth = getAuth(app)
    return (
        <>
            <button onClick={() => auth.signOut()}>Sair</button>
        </>
    )
}