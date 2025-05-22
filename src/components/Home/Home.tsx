import "./home.css"


function Home(){
    return(
        <>
            <body>
                <main>
                    <div className="welcomeHolder">
                        <div className="welcomeDiv">
                            <p className="motto"> "SIMPLYFING CS" </p>
                            <h1 className="welcome">Who are we?</h1>
                            <div className="wip">
                                <p>We are a student led organization at DePaul University focused on fostering a community through peer-to-peer computer science tutoring open to all majors.</p>
                            </div>
                        </div>
                        <img className="simplylogo" src="src/Assets/IMG_5051.png" width="200" height="200"></img>

                    </div>

                    {/* <div className="space">
                        <p> exmaple </p>
                    </div> */}
                </main>
            </body>
        </>
    )
}


export default Home
