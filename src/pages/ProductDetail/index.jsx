import { useState } from "react"
import { useLocation } from "react-router"
import { Container, Content, ImageContainer, InfoContainer, SizeSelector, ColorSelector, ButtonContainer } from "./styles"
import Header from "../../components/Header"
import Button from "../../components/Button"
import formatPrice from "../../utils/priceFormatter"
import { useNavigate } from "react-router"

function ProductDetail() {
    const location = useLocation()
    const product = location.state?.product
    const navigate = useNavigate()

    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")

    if (!product) {
        return (
            <>
                <Header />
                <Container>
                    <p>Produto não encontrado.</p>
                </Container>
            </>
        )
    }

    const goHome = () => {
        alert('Obrigado por comprar conosco, volte sempre!')
        navigate('/')
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <ImageContainer>
                        <img src={product.img} alt={product.title} />
                    </ImageContainer>
                    <InfoContainer>
                        <div className="info">
                            <h1>{product.title}</h1>
                            <button onClick={() => window.history.back()}>Cancelar</button>
                        </div>
                        <p className="price">{formatPrice(product.price)}</p>
                        <p className="description">{product.description}</p>

                        <SizeSelector>
                            <label>Tamanho:</label>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                <option value="">Selecione um tamanho</option>
                                {product.sizes.map((size) => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </SizeSelector>

                        <ColorSelector>
                            <label>Cor:</label>
                            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                                <option value="">Selecione uma cor</option>
                                {product.colors.map((color) => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </ColorSelector>

                        <ButtonContainer>
                            <Button onClick={goHome}>Comprar Agora</Button>
                        </ButtonContainer>
                    </InfoContainer>
                </Content>
            </Container>
        </>
    )
}

export default ProductDetail
