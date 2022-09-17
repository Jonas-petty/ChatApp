import React, { useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";


import { app, db } from "../../firebase";
import SignOut from "../SignOut/SignOut";
import SendMessage from "../SendMessage/SendMessage";
import { getAuth } from "firebase/auth";

import { Messages } from "./ChatStyle";
    

export default function Chat() {
    const [message, setMessage] = useState([])
    const auth = getAuth(app)

    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        setMessage(messages);
    });

    return (
        <>
            <SignOut />
            <Messages>
            {message.map(({id, text, photoURL, uid}) => (
                <div>
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