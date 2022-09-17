import React from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { app } from "../../firebase";

import { Form, Input, Container, Button } from "./SignInStyle";

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
        <Container>
            <Form>
                <h1>Bem Vindo(a)</h1>
                <Input type="email" name="email" id="email" placeholder="E-mail" required/>
                <Input type="password" name="password" id="password" placeholder="Senha" required/>
                <Button onClick={SignInWithEmailAndPassword}>Cadastrar</Button>
                <Button onClick={logInWithEmailAndPassword} primary>Entrar</Button>
            </Form>
        </Container>
    )
}   