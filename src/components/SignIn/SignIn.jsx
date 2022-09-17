import React from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { app } from "../../firebase";

export default function SignIn() {
    function SignInWithEmailAndPassword(event) {
        event.preventDefault()

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                alert('Conta Criada')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }

    function logInWithEmailAndPassword(event) {
        event.preventDefault()

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }


    return (
        <form>
            <input type="email" name="email" id="email" placeholder="E-mail" required/>
            <input type="password" name="password" id="password" placeholder="Senha" required/>
            <button onClick={SignInWithEmailAndPassword}>Cadastrar</button>
            <button onClick={logInWithEmailAndPassword}>Entrar</button>
        </form>
    )
}   