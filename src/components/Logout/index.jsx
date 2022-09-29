import React from "react";

import {auth} from "../../firebase" 

import "./style.css"

export default function Logout() {
    function logout() {
        auth.signOut()
    }

    return (
        <button onClick={logout} className="logout">Sair</button>
    )
}