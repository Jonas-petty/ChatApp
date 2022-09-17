import styled from "styled-components";

const Messages = styled.section`
    background-color: lightcyan;

    .msg {
        border: 1px solid darkcyan;
        margin: 10px;
        padding: 10px;
        color: #FFFF;
    }

    .sent {
        background-color: green;
    }

    .received {
        background-color: red;
    }
`

export {Messages}