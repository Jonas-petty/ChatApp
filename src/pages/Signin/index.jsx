import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Container, Form, Input, Button } from "../../styles";

import { auth } from "../../firebase"

export default function Signin() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    function hadleCreateAccount(event) {
        event.preventDefault()
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {})
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    alert(errorMessage)
                })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }


    return (
        <Container>
            <h2>Cadastrar</h2>
            <Form action="#">
                <Input
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text" name="username" id="username" placeholder="Nome de Usuário" />
                <Input
                onChange={(event) => setEmail(event.target.value)}
                value={email} 
                type="email" name="email" id="email" placeholder="Email" />
                <Input
                onChange={(event) => setpassword(event.target.value)}
                value={password} 
                type="password" name="password" id="password" placeholder="Senha" />
                <Button type="submit" primary onClick={hadleCreateAccount}>Cadastrar</Button>
            </Form>
            <Link to="/">Já tenho conta</Link>
        </Container>
    )
}