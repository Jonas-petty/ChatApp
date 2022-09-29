import styled, {createGlobalStyle, css} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #21212D;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #FFF;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }
`

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .alternatives {
        width: 350px;
        display: flex;
        justify-content: space-between;
    }

    a {
        color: #645EC6;
    }
`

const Form = styled.form`
    font-size: 1rem;
    max-width: 500px;
    text-align: center;
    background-color: #2C2C38;
    color: #D6E0FB;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
`

const Input = styled.input`
    font-size: 1rem;
    background-color: #2C2C38;
    color: #77778a;
    border: 1px solid #484854;
    border-radius: 5px;
    text-indent: 10px;
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
    outline: none;
`

const Button = styled.button`
    cursor: pointer;
    font-size: 1rem;
    height: 40px;
    width: 100%;

    ${props => props.primary && css`
        background-color: #645EC6;
        color: #FFF;
        border: 1px solid #645EC6;
        border-radius: 25px;
    `}
`


export { GlobalStyle, Container, Form, Input, Button }