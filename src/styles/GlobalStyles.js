import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #1a1b1e;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        color: #fff;
    }
`;