import styled from "styled-components";

const Nav = styled.nav`
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #645EC6;
    padding: 5px 15px;

    ul {
        display: flex;
        justify-content: space-between  ;
        align-items: center;

        li {
            list-style-type: none;
            display: flex;
            align-items: center;

            img {
                width: 45px;
                margin-right: 20px;
            }
        }
    }

`

const Container =  styled.div`
    height: 100vh;
    display: grid;
    grid-template: 1fr / 1fr 2fr;
    @media (max-width: 650px) {
        grid-template: 1fr / 0fr 1fr;
    }
`


export { Nav, Container }