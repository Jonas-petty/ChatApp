import React from "react";
import { Link } from "react-router-dom";

import { Container, Form, Input, Button } from "../../styles"

export default function Password() {
    return (
        <Container>
            <h2>Trocar Senha</h2>
            <Form action="#">
                <Input type="email" name="email" id="email" placeholder="Email de verificação" />
                <Button type="submit" primary>Enviar código</Button>
            </Form>
            <Link to="/">Voltar</Link>
        </Container>
    )
}