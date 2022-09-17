import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

import { app, db } from '../../firebase'

import {MessageInput, MessageForm, SendMessageButton} from './SendMessageStyle' 

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
        <MessageForm onSubmit={sendMessage}>
            <MessageInput onChange={(event) => setUserMessage(event.target.value)} value={userMessage} type="text" placeholder="Messagem..."/>
            <SendMessageButton>Enviar</SendMessageButton>
        </MessageForm>
    )
}