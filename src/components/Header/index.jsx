import { Box, Container, Content, Responsive, ResponsiveBox } from "./styles"
import Logo from '../../assets/logo.png'
import { useState } from "react"
import { useNavigate } from "react-router"
import { Menu, X } from "lucide-react"
import Overlay from "../Overlay"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            {isOpen && <Overlay onClick={toogleMenu} />}
            <Container>
                <Content>
                    <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
                    <Box>
                        <ul>
                            <li><a href="/">Ínicio</a></li>
                            <li><a href="/camisas">Camisas</a></li>
                            <li><a href="/calcas">Calças</a></li>
                            <li><a href="/casacos">Casacos</a></li>
                        </ul>
                    </Box>
                </Content>

                <Responsive>
                    <button type="button" onClick={toogleMenu}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </Responsive>
                <ResponsiveBox>
                    {isOpen && (
                        <ul>
                            <li><a href="/">Ínicio</a></li>
                            <li><a href="/camisas">Camisas</a></li>
                            <li><a href="/calcas">Calças</a></li>
                            <li><a href="/casacos">Casacos</a></li>
                        </ul>
                    )}
                </ResponsiveBox>
            </Container>
        </>
    )
}

export default Header