import styled from "styled-components";

const Messages = styled.section`
    background-color: #2C2C38;
    padding: 20px;
    max-width: 500px;
    margin: auto;
    display: grid;
    grid-template: auto / 1fr;

    .msg {
        border: 1px solid darkcyan;
        margin: 10px auto;
        padding: 10px;
        max-width: 250px;
        word-wrap: break-word;
    }

    .sent {
        background-color: #645FC6;
        color: #FFF;
        border-radius: 20px 0 20px 20px;
        float: right;

    }

    .received {
        background-color: #FFF;
        color: #645FC6;
        border-radius: 0 20px 20px 10px;
        float: left;

    }
`

export {Messages}