import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --black: #1b1b1b;
        --green: #23D997;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body{
        margin: 0;
        background-color: #1B1B1B;
    }
    nav{
        font-family: 'Style Script', cursive;
 
    }
    button{
        color: white;
        padding: 0.7rem 1.2rem;
        border: 2px solid var(--green);
        background: transparent;
        cursor: pointer;
        transition: all 0.5s ease;
        font-weight: bold;
        &:hover{
            background-color: var(--green);
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
    }
    h4{
        font-weight: bold;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        color: #23D997;
        font-weight: bold;
    }
`

export default GlobalStyle;