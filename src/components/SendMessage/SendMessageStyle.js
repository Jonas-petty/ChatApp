import styled from "styled-components";

const MessageForm = styled.form`
    max-width: 500px;
    display: grid;
    grid-template: 40px / 3fr 1fr;
    margin: auto;
`

const MessageInput = styled.input`
    background-color: #2C2C38;
    color: #5F636F;
    border: 1px solid #5F636F;
    text-indent: 10px;
    font-size: 1rem;
    height: 40px;
`

const SendMessageButton = styled.button`
    cursor: pointer;
    font-size: 1rem;
    background-color: #645FC6;
    color: #FFF;
    border: 1px solid #645FC6;
`

export {MessageInput, MessageForm, SendMessageButton}