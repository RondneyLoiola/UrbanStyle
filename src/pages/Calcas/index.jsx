import { useState } from "react"
import { useNavigate } from "react-router"
import { Container, Content, InputContainer } from "./styles"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Calca1 from '../../assets/calca1.jpg'
import Calca2 from '../../assets/calca2.jpg'
import Calca3 from '../../assets/calca3.jpg'
import Calca4 from '../../assets/calca4.jpg'
import Calca5 from '../../assets/calca5.jpg'
import Calca6 from '../../assets/calca6.jpg'
import formatPrice from "../../utils/priceFormatter"
import { ShoppingCart } from "lucide-react"


function Calcas() {
    const navigate = useNavigate()
    const [busca, setBusca] = useState("")
    const [ordenacao, setOrdenacao] = useState("")

    const calcas = [
        {
            img: Calca1,
            title: "StreetWear PallaWorld",
            price: 50000,
            description: "Calça StreetWear com design PallaWorld, confortável e estilosa para o dia a dia.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Azul"],
        },
        {
            img: Calca2,
            title: "StreetWear Corrida",
            price: 15000,
            description: "Calça StreetWear ideal para corridas, leve e resistente.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Cinza", "Preto", "Verde"],
        },
        {
            img: Calca3,
            title: "Calça Cargo Basic",
            price: 22000,
            description: "Calça cargo basica e prática, com bolsos funcionais para o uso diário.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Branco", "Bege", "Azul"],
        },
        {
            img: Calca4,
            title: "StreetWear Jeans",
            price: 20000,
            description: "Calça jeans StreetWear, combina estilo clássico com modernidade.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Azul Escuro", "Preto", "Cinza"],
        },
        {
            img: Calca5,
            title: "StreetWear Stars",
            price: 18000,
            description: "Calça StreetWear com estrelas, perfeita para looks ousados.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Vermelho"],
        },
        {
            img: Calca6,
            title: "Solid Jeans",
            price: 18000,
            description: "Calça jeans sólida, versátil e confortável para qualquer ocasião.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Azul", "Preto", "Bege"],
        },
    ]


    const calcasFiltradas = calcas.filter((Calca) => {
        return Calca.title.toLowerCase().includes(busca.toLowerCase())
    })


    const calcasOrdenadas = [...calcasFiltradas].sort((a, b) => {
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
                        placeholder="Buscar Calcas..."
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
                    {calcasOrdenadas.length === 0 ? (
                        <div className="no-found">
                            <p>Calça não encontrada</p>
                        </div>
                    ) : (
                        calcasOrdenadas.map((Calca) => (
                            <div className="card" key={Calca.title} onClick={() => navigate('/product-detail', { state: { product: Calca } })}>
                                <img src={Calca.img} alt={Calca.title} />
                                <div className="card-info">
                                    <p>{Calca.title}</p>
                                    <div className="card-div">
                                        <span>{formatPrice(Calca.price)}</span>
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

export default Calcas