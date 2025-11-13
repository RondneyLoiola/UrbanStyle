import styled from "styled-components";

export const Container = styled.input`
    width: 500px;
    padding: 12px;
    background-color: transparent;
    border: 2px solid rgba(116, 81, 171, 0.44);
    border-radius: 15px;
    outline: none;
    font-size: 14px;

    &:focus {
        border: 2px solid #7451AB;
    }
`