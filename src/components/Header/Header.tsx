import './header.css'



function Header(){
    return(
        <>
            <nav>
                <h1 className="logo"> simplycs </h1>
                <div className="nav-items">
                    <a href="#aboutus"> About Us </a>
                    <a href="#contact"> Contact </a>
                </div>
            </nav>
        </>
    )
}


export default Header