import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #1a1b1e;
    z-index: 999;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    gap: 12px;

    img {
        width: 60px;
    }
`

export const Box = styled.div`
    display: flex;

    ul {
        display: flex;
        gap: 32px;
    }

    ul li {
        list-style: none;
    }

    ul li a{
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;
    }

    @media (max-width: 1100px) {
        display: none;
    }
    
`

export const Responsive = styled.div`
    position: absolute;
    right: 15px;
    top: 32px;

    button {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;
    }

    @media (min-width: 1100px) {
        display: none;
    }

    @media (max-width: 800px) {
        display: block;
        background-color: #1a1b1e;
    }
`

export const ResponsiveBox = styled.div`
    width: 100%;
    //background-color: #2D263C;
    height: 100;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 32px;

        li {
            list-style: none;
            font-size: 20px;
        }

        li a{
            text-decoration: none;
            color: #fff;
        }
    }

    @media (min-width: 1100px) {
        display: none;
    }
`

    
