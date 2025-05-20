import { Header } from '../Header/Header.tsx'
import { Footer } from '../Footer/Footer.tsx'
import { Navbar } from '../Navbar/Navbar.tsx'
import { Main } from '../Main/Main.tsx'

export const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </>
    )
}
