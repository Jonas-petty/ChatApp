import React, { useState } from "react";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { Link } from "react-router-dom";

import {auth} from '../../firebase'
import { Container, Form, Input, Button } from "../../styles"

import GoogleButton from '../../components/GoogleButton/index'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function loginWithGoogle() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {

            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }

    function logInWithEmailAndPassword(event) {
        event.preventDefault()

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
            <h2>Bem vindo(a)</h2>
            <GoogleButton func={loginWithGoogle}/>
            <Form action="#">
                <Input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email" name="email" id="email" placeholder="Email" />

                <Input 
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password" name="password" id="password" placeholder="Senha" />

                <Button onClick={logInWithEmailAndPassword} type="submit" primary>Entrar</Button>
            </Form>
            <div className="alternatives">
                <Link to="/signin">Não tenho conta</Link>
                <Link to="/password">Esqueci minha senha</Link>
            </div>
        </Container>
    )
}