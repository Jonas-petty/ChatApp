import React, { useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";


import { app, db } from "../../firebase";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";

import { Messages } from "./ChatStyle";
import SignOut from "../SignOut/SignOut";
import SendMessage from "../SendMessage/SendMessage";

export default function Chat() {
    const [message, setMessage] = useState([])
    const auth = getAuth(app)

    useEffect(() => {
        onSnapshot(query(collection(db, 'messages'), orderBy('createdAt'), limit(50)), (snapshot) => {
            setMessage(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <>
            <SignOut />
            <Messages>
            {message.map(({id, text, photoURL, uid}) => (
                <div className="messagem">
                    <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <img src={photoURL} alt="User profile picture" />
                        <p>{text}</p>
                    </div>
                </div>
            ))}
            </Messages>
            
            <SendMessage />
        </>
    )
}