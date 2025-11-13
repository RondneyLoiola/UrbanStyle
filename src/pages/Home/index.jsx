import Card from "../../components/Card"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ContainerSection, Content, FeatureSection, Box, CardItems, QuestionSection, QuestionCard, CardItemsQuest } from "./styles"
import Camisa from '../../assets/camisaCard.jpg'
import Calca from '../../assets/calcaCard.jpg'
import Casaco from '../../assets/casacoCard.jpg'
import { CircleDollarSign, FastForward, Gem, RefreshCcw } from "lucide-react"
import { useNavigate } from "react-router"


function Home() {
    const navigate = useNavigate()
    const colectionCards = [
        {
            img: Camisa,
            title: "Coleção de Camisas",
            desc: 'Confira a nossa nova coleção de camisas, alta qualidade em cada detalhe.',
            route: '/camisas'
        },
        {
            img: Calca,
            title: "Coleção de Calças",
            desc: 'Confira a nossa nova coleção de calças, combina elegância com praticidade.',
            route: '/calcas'
        },
        {
            img: Casaco,
            title: "Coleção de Casacos",
            desc: 'Confira a nossa nova coleção de casacos, ótimos para o inverno.',
            route: '/casacos'
        },

    ]

    const whyCards = [
        {
            icon: <FastForward size={40} color="red" />,
            title: "Entregas rápidas",
            desc: 'Receba seus produtos com agilidade e segurança em todo o país.'
        },
        {
            icon: <Gem size={40} color="blue" />,
            title: "Qualidade Premium",
            desc: 'Produtos selecionados com os melhores materiais e acabamentos.'
        },
        {
            icon: <RefreshCcw size={40} color="yellow" />,
            title: "Troca Facilitada",
            desc: 'Política de troca simples e sem complicações para sua satisfação.'
        },
        {
            icon: <CircleDollarSign size={40} color="green" />,
            title: "Pagamento Seguro",
            desc: 'Diversas opções de pagamento com total segurança e proteção.'
        }
    ]

    return (
        <>
            <ContainerSection>
                <Content>
                    <Box>
                        <h1>Moda que inspira!</h1>
                        <p>Descubra seu estilo único com nossa nova coleção</p>
                        <Button>EXPLORAR AGORA</Button>
                    </Box>
                </Content>
            </ContainerSection>

            <FeatureSection>
                <h2>Nossas coleções</h2>
                <CardItems>
                    {colectionCards.map(item => (
                        <div key={item.title} onClick={() => navigate(item.route)} >
                            <Card
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />
                        </div>
                        
                    ))}
                </CardItems>
            </FeatureSection>

            <QuestionSection>
                <h2>Por que nos escolher?</h2>
                <CardItemsQuest>
                    {whyCards.map(item => (
                        <div key={item.title}>
                            <QuestionCard>
                                {item.icon}
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </QuestionCard>
                        </div>
                    ))}
                </CardItemsQuest>
            </QuestionSection>
        </>
    )
}

export default Home