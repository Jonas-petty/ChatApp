import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, {useState} from "react";

import {auth, db} from "../../firebase"

import sendIcon from "../../assets/send.svg"

import './style.css'

export default function UserMessage()  {
    const [userMessage, setUserMessage] = useState('')

    async function sendMessage(event) {
        event.preventDefault()

        const { uid, photoURL, displayName } = auth.currentUser

        await addDoc(collection(db, 'messages'), {
            text: userMessage,
            photoURL,
            uid,
            displayName,
            createdAt: serverTimestamp()
        })
        setUserMessage('')
    }
    return (
        <form onSubmit={sendMessage} className="message_form">
            <input
            onChange={(event) => setUserMessage(event.target.value)}
            value={userMessage}
            type="text" placeholder="Mensagem..." />
            <button type="submit"><img src={sendIcon} alt="" /></button>
        </form>
    )
}