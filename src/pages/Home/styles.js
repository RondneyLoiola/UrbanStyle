import styled from "styled-components";

export const ContainerSection = styled.section`
    height: calc(100vh - 80px);
    margin-top: 80px;
    width: 100%;
    padding: 20px;
    background: linear-gradient(135deg, #1e1e1e 0%, #2d1b3d 100%);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 12px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 8rem;
        color: #7451AB;
    }

    p {
        font-size: 2rem;
    }

    @media (max-width: 1100px) {
        text-align: center;

        h1 {
            font-size: 4.4rem;
        }

        p {
            font-size: 1.4rem;
        }
    }
`

export const FeatureSection = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    padding: 20px;

    h2 {
        font-size: 4rem;
        margin-bottom: 20px;
        color: #7451AB;
    }

    @media (max-width: 1100px) {
        text-align: center;

        height: auto;
        padding: 32px;

        h2 {
            font-size: 3rem;
        }
    }
`

export const CardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 380px);
    gap: 32px;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 260px);
    }
`

export const CardItemsQuest = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 340px);
    gap: 32px;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 260px);
    }
`

export const QuestionSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    background: linear-gradient(135deg, #1e1e1e 0%, #2d1b3d 100%);

    h2 {
        font-size: 4rem;
        margin-bottom: 20px;
        color: #7451AB;
    }

    @media (max-width: 1100px) {
        text-align: center;
        padding: 20px;

        h2 {
            font-size: 3rem;
        }

        height: auto;
    }
`

export const QuestionCard = styled.div`
    width: 300px;
    height: 350px;
    background-color: #1f2028;
    padding: 7px;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    text-align: center;
    transition: all 0.2s ease-in-out;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 20px;
        opacity: 0.8;
    };

    &:hover {
        background-color:rgba(116, 81, 171, 0.21);
        transform: translateY(-2px);
    }

    @media (max-width: 1100px) {
        h2 {
            font-size: 1.4rem;
        }

        width: 250px;
        height: 300px;
    }
`