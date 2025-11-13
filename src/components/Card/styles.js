import styled from "styled-components";

export const CardContainer = styled.div`
    width: auto;
    height: auto;
    background-color: rgb(45, 46, 58);
    border-radius: 10px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    transition: all 0.2s ease-in-out;

    img {
        width: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

    &:hover {
        background-color:rgba(116, 81, 171, 0.21);
        cursor: pointer;
        transform: translateY(-5px);
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 12px;
`

export const Desc = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    border: none;
    padding: 12px;
    position: relative;

    p {
        font-size: 24px;
        font-weight: bold;
    };

    span {
        font-size: 16px;
        opacity: 0.8;
    }

`