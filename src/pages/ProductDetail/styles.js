import styled from "styled-components"

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;
    height: calc(100vh - 80px);
    margin-top: 80px;

    select {
        background-color: transparent;
        border: 2px solid rgba(116, 81, 171, 0.44);
        border-radius: 5px;
        font-size: 14px;
        padding: 8px 5px;
        outline: none;
        
        option {
            background-color: #251D2C;
        };
        
    }
`

export const Content = styled.div`
    display: flex;
    gap: 40px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const ImageContainer = styled.div`
    flex: 1;
    img {
        width: 100%;
        max-width: 500px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`

export const InfoContainer = styled.div`
    flex: 1;
    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        color: #333;
    }
    .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #e74c3c;
        margin-bottom: 20px;
    }
    .description {
        font-size: 1rem;
        line-height: 1.6;
        color: #666;
        margin-bottom: 30px;
    }

    .info {
        display: flex;
        justify-content: space-between;

        button {
            width: 70px;
            padding: 5px;
            background-color:rgba(231, 77, 60, 0.53);
            color: white;
            border: none;
            border-radius: 4px;
            font-size: .9rem;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color:rgb(163, 60, 48);
            }
        }
    }
`

export const SizeSelector = styled.div`
    margin-bottom: 20px;
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }
`

export const ColorSelector = styled.div`
    margin-bottom: 30px;
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    button {
        width: 70px;
        padding: 5px;
        margin-top: 15px;
        background-color:rgba(231, 77, 60, 0.53);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: .9rem;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color:rgb(163, 60, 48);
        }
    }
`
