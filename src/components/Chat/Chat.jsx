import React, { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore'


import { db } from "../../firebase";
import SignOut from "../SignOut/SignOut";
    

export default function Chat() {
    const [message, setMessage] = useState([])

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
            {message.map(({id, text, photoURL}) => (
                <div key={id}>
                    <img src={photoURL} alt="tedfd" />
                    <p>{text}</p>
                </div>
            ))}
            
        </>
    )
}