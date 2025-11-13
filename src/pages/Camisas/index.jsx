import { useState } from "react"
import { useNavigate } from "react-router"
import { Container, Content, InputContainer } from "./styles"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Camisa1 from '../../assets/camisa1.png'
import Camisa2 from '../../assets/camisa2.png'
import Camisa3 from '../../assets/camisa3.png'
import Camisa4 from '../../assets/camisa4.png'
import Camisa5 from '../../assets/camisa5.png'
import Camisa6 from '../../assets/camisa6.png'
import formatPrice from "../../utils/priceFormatter"
import { ShoppingCart } from "lucide-react"

function Camisas() {
    const navigate = useNavigate()
    const [busca, setBusca] = useState("")
    const [ordenacao, setOrdenacao] = useState("")

    const camisas = [
        {
            img: Camisa1,
            title: "StreetWear Modern",
            price: 32000,
            description: "Camisa StreetWear com design moderno e confortável para o dia a dia.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Azul"],
        },
        {
            img: Camisa2,
            title: "StreetWear Elegant",
            price: 35000,
            description: "Camisa StreetWear elegante, perfeita para looks casuais e urbanos.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Bege", "Cinza", "Verde"],
        },
        {
            img: Camisa3,
            title: "StreetWear Perfection",
            price: 22000,
            description: "Camisa StreetWear com tema de perfeição, ideal para quem busca estilo único.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Vermelho"],
        },
        {
            img: Camisa4,
            title: "StreetWear LifeIsPain",
            price: 26000,
            description: "Camisa StreetWear com mensagem impactante, para expressar sua atitude.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Cinza", "Amarelo"],
        },
        {
            img: Camisa5,
            title: "StreetWear King of Kings",
            price: 47000,
            description: "Camisa StreetWear premium, para representar o Rei dos Reis.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Dourado", "Preto", "Roxo"],
        },
        {
            img: Camisa6,
            title: "StreetWear Abstract",
            price: 20000,
            description: "Camisa StreetWear com design abstrato, adiciona criatividade ao seu guarda-roupa.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Multicolor", "Preto", "Azul"],
        },
    ]

    const camisasFiltradas = camisas.filter((camisa) => {
        return camisa.title.toLowerCase().includes(busca.toLowerCase())
    })

    const camisasOrdenadas = [...camisasFiltradas].sort((a, b) => {
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
                        placeholder="Buscar camisas..."
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
                    {camisasOrdenadas.length === 0 ? (
                        <div className="no-found">
                            <p>Camisa não encontrada</p>
                        </div>
                    ) : (
                        camisasOrdenadas.map((camisa) => (
                            <div className="card" key={camisa.title} onClick={() => navigate('/product-detail', { state: { product: camisa } })}>
                                <img src={camisa.img} alt={camisa.title} />
                                <div className="card-info">
                                    <p>{camisa.title}</p>
                                    <div className="card-div">
                                        <span>{formatPrice(camisa.price)}</span>
                                        <button><ShoppingCart size={20}/></button>
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

export default Camisas