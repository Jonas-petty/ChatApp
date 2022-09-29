import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import React, {useState, useEffect} from "react";

import {auth, db} from "../../firebase"

import User from "../../assets/default-user.svg"

import './styles.css'

export default function Messages() {
    const [message, setMessage] = useState([])

    useEffect(() => {
        onSnapshot(query(collection(db, 'messages'), orderBy('createdAt'), limit(50)), (snapshot) => {
            setMessage(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])
    
    const messageElements = message.map(({id, text, photoURL, uid, displayName}) => (
                                <div className="message" key={id}>
                                    <div className={uid == auth.currentUser.uid ? 'sent' : 'received'}>
                                        <img src={photoURL ? photoURL : User} alt="User profile picture" />
                                        <div className="message_info">
                                            <small className="username">{displayName}</small>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

    return (
        <>
            <div className="container">
                {messageElements}
            </div>
        </>
    )
}