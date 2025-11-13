import styled from "styled-components";

export const Container = styled.section`
    height: auto;
    margin-top: 80px;
    width: 100%;
    padding: 20px;
    background: linear-gradient(135deg, #1e1e1e 0%, #2d1b3d 100%);

`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    select {
        background-color: transparent;
        border: 2px solid rgba(116, 81, 171, 0.44);
        border-radius: 5px;
        font-size: 14px;
        padding: 8px 5px;
        outline: none;

        option {
            background-color: #251D2C;
        }
    }
`

export const Content = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-template-rows: repeat(2, 340px);
    gap: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 12px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 16px;
    }

    .card {
        background-color:rgb(45, 46, 58);
        padding: 12px;
        border-radius: 12px;
        border: none;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color:rgba(116, 81, 171, 0.21);
            transform: translateY(-2px);
        }
    }

    .card-info {
        display: flex;
        flex-direction: column;
        padding-top: 12px;
        padding-left: 12px;
        gap: 12px;

        p {
            font-size: 18px;
        }

        span {
            font-size: 22px;
            color: #7451AB;
        }

        .card-div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                width: 42px;
                height: 42px;
                background-color: #7451AB;
                border: none;
                border-radius: 50%;
                text-align: center;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .no-found {
        display: flex;
        align-items: center;
        background-color:rgba(116, 81, 171, 0.05);
        width: 250px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        text-align: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;

        p {
            opacity: 0.8;
        }
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 280px);
        grid-template-rows: repeat(3, 340px);
    }
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 280px);
        grid-template-rows: repeat(6, 340px);
    }
`