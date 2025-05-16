import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Test from "../Test/test"
import './layout.css'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Test />
            <Footer />
        </>
    )
}

export default Layout