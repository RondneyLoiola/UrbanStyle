import { useState } from "react"
import { useNavigate } from "react-router"
import { Container, Content, InputContainer } from "./styles"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Casaco1 from '../../assets/casaco1.jpg'
import Casaco2 from '../../assets/casaco2.jpg'
import Casaco3 from '../../assets/casaco3.jpg'
import Casaco4 from '../../assets/casaco4.jpg'
import Casaco5 from '../../assets/casaco5.jpg'
import Casaco6 from '../../assets/casaco6.jpg'
import formatPrice from "../../utils/priceFormatter"
import { ShoppingCart } from "lucide-react"


function Casacos() {
    const navigate = useNavigate()
    const [busca, setBusca] = useState("")
    const [ordenacao, setOrdenacao] = useState("")

    const casaco = [
        {
            img: Casaco1,
            title: "StreetWear Esportivo",
            price: 20000,
            description: "Casaco StreetWear esportivo, ideal para atividades físicas e looks casuais.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Azul", "Cinza"],
        },
        {
            img: Casaco2,
            title: "StreetWear Classic",
            price: 30000,
            description: "Casaco StreetWear clássico, versátil para qualquer estação.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Vermelho"],
        },
        {
            img: Casaco3,
            title: "StreetWear Pikachu",
            price: 18000,
            description: "Casaco StreetWear com tema Pikachu, divertido e único.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Amarelo", "Preto", "Azul"],
        },
        {
            img: Casaco4,
            title: "Red Pizza",
            price: 22000,
            description: "Casaco com design de pizza vermelha, perfeito para amantes de comida.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Vermelho", "Preto", "Branco"],
        },
        {
            img: Casaco5,
            title: "Jaqueta Jeans",
            price: 30000,
            description: "Jaqueta jeans clássica, combina com qualquer look.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Azul", "Preto", "Bege"],
        },
        {
            img: Casaco6,
            title: "StreetWear Basic",
            price: 15000,
            description: "Casaco StreetWear básico, essencial no guarda-roupa.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Cinza", "Branco"],
        },
    ]

    const casacoFiltradas = casaco.filter((camisa) => {
        return camisa.title.toLowerCase().includes(busca.toLowerCase())
    })

    const casacoOrdenadas = [...casacoFiltradas].sort((a, b) => {
        if (ordenacao === "maior") {
            return b.price - a.price
        } else if (ordenacao === "menor") {
            return a.price - b.price
        }
        return 0
    })

    return (
        <>
            <Header />
            <Container>
                <InputContainer>
                    <Input
                        placeholder="Buscar casaco..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                    <select
                        value={ordenacao}
                        onChange={(e) => setOrdenacao(e.target.value)}
                    >
                        <option value="">Ordenar por preço</option>
                        <option value="menor">Menor preço</option>
                        <option value="maior">Maior preço</option>
                    </select>
                </InputContainer>

                <Content>
                    {casacoOrdenadas.length === 0 ? (
                        <div className="no-found">
                            <p>Casaco não encontrado!</p>
                        </div>
                    ) : (
                        casacoOrdenadas.map((casaco) => (
                            <div className="card" key={casaco.title} onClick={() => navigate('/product-detail', { state: { product: casaco } })}>
                                <img src={casaco.img} alt={casaco.title} />
                                <div className="card-info">
                                    <p>{casaco.title}</p>
                                    <div className="card-div">
                                        <span>{formatPrice(casaco.price)}</span>
                                        <button><ShoppingCart  size={20}/></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </Content>

            </Container>
        </>
    )
}

export default Casacos