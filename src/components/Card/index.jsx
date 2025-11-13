import { CardContainer, Content, Desc } from "./styles"

function Card({ img, title, desc }) {
    return (
        <CardContainer>
            <Content>
                <img src={img} alt="roupa-card" />
                <Desc>
                    <p>{title}</p>
                    <span>{desc}</span>
                </Desc>
            </Content>

        </CardContainer>
    )
}

export default Card