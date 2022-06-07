import Navbar from "./Navbar"
import { Container, Main } from './styles/LayoutStyle'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            
            <Container>
                <Main>
                    {children}
                </Main>
            </Container>
        </>

    )
}

export default Layout