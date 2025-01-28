import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react"


function Layout() {
    const [count, setCount] = useState(0)
    return (
        <>
            <body>
                <Header />
                <main> 
                    <h1> Welcome to the SimplyCS website! </h1>
                    <div className="card">
                        <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                        </button>
                        <p>
                            Open to everyone!
                        </p>
                    </div>
                    <p className="read-the-docs">
                        work in progress...
                    </p>        
                </main>

                <Footer />
            </body>
        </>
    )
}

export default Layout