import React from "react";

import Logout from "../../components/Logout";
import Messages from "../../components/Messages";
import UserMessage from "../../components/UserMessage";
import Contacts from "../../components/Contacts/Contacts";

import { Nav, Container } from "./style";

import logo from "/icon.svg"

export default function Chat() {
    return (
        <>
            <Nav className="navbar">
                <ul>
                    <li><img src={logo} alt="Logo de PettyChat" /><h1>PettyChat</h1></li>
                    <li><Logout /></li>
                </ul>
            </Nav>
            <Container>
                <Contacts />
                <section className="chat">
                    <Messages />
                    <UserMessage />
                </section>
            </Container>
        </>
    )
}