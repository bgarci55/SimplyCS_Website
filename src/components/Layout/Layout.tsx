import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import './layout.css'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default Layout