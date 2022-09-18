import styled, { css } from "styled-components";

const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    background-color: #2C2C38;
    color: #FFF;
    min-width: 300px;
    padding: 20px;
    margin: 0px;
    display: grid;
    grid-template: repeat(5, 40px)/ 1fr;
    gap: 10px;
    border-radius: 10px;
`

const Input = styled.input`
    background-color: #2C2C38;
    color: #5F636F;
    border: 1px solid #5F636F;
    border-radius: 5px;
    font-size: 1rem;
    text-indent: 10px;
    outline: none;

`

const Button = styled.button`
    cursor: pointer;
    font-size: 1rem;
    background-color: #645FC6;
    color: #FFF;
    border: 1px solid #645FC6;
    border-radius: 25px;
    transition: 0.2s;

    &:hover {
        transform: scale(1.020);
    }

    ${props => props.primary && css`
        background-color: #FFF;
        color: #645FC6;
        border: 1px solid #FFF;
    `}
`

export { Form, Input, Container, Button }