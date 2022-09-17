import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { FieldValue, collection, serverTimestamp, doc, addDoc } from "firebase/firestore";

import { app, db } from '../../firebase'

export default function SendMessage() {
    const [msg, setMsg] = useState('')

    const auth = getAuth(app)
    async function sendMessage(event) {
        event.preventDefault()

        const {uid, photoURL} = auth.currentUser

        const dbref = collection(db, 'messages')
        const data = {
            text: msg,
            photoURL,
            uid,
            createdAT: serverTimestamp()
        }

        await addDoc(dbref, data)
            .then(docref => {
                alert('messagem enviada')
            })
            .catch(error => {
                console.log(error.message)
            })
            
        setMsg('')
    }

    return (
        <form onSubmit={sendMessage}>
            <input onChange={(event) => setMsg(event.target.value)} value={msg} type="text" />
            <button>Enviar</button>
        </form>
    )
}