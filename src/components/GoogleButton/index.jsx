import React from "react";
import googleLogo from '../../assets/google.svg'

import { Button } from "./style";

export default function GoogleButton(props) {
    return(
        <Button onClick={props.func}><img src={googleLogo} alt="Google icon" /> Entrar com Google</Button>
    )
}