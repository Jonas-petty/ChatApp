import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { FieldValue, collection, serverTimestamp, doc, addDoc } from "firebase/firestore";

import { app, db } from '../../firebase'

export default function SendMessage() {
    const [userMessage, setUserMessage] = useState('')

    async function sendMessage(event) {
        event.preventDefault()
        const auth = getAuth(app)

        const {uid, photoURL} = auth.currentUser

        await addDoc(collection(db, 'messages'), {
            text: userMessage,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        })           
        setUserMessage('')
    }

    return (
        <form onSubmit={sendMessage}>
            <input onChange={(event) => setUserMessage(event.target.value)} value={userMessage} type="text" />
            <button>Enviar</button>
        </form>
    )
}