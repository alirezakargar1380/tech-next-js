const Header = () => {
    return(
        <div className="w-100 position-fixed"
             style={{ zIndex: 10 }} id="header-place">
            <header className="w-100">
                <div
                    id="header"
                    className="position-absolute blur-bg header-bg d-flex w-100"
                    style={{zIndex: 4}} >
                    <div className="text-left">
                        <a href="/">
                            <img className="p-3 w-75" src="/ak logo.png" alt="ak logo"/>
                        </a>
                    </div>
                    <div className="text-right ml-auto cursor"
                         id="menu-btn"
                    >
                        <div className="mt-4 mr-4">
                            <div className="containerrr" id="menu-icon">
                                <div className="bar1"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        {/*<div className="w-75px b-bottom mt-4 mr-3"></div>*/}
                        {/*<div className="b-bottom mt-3 mr-3 ml-auto halfLine" style={{width: "45px"}}></div>*/}
                    </div>
                </div>
                <section className="vh-100 vw-100 blur-bg header-bg" id="menuSec" style={{display: "none"}}>
                    <div
                        className="w-100 position-absolute h-inherit text-center"
                        id="menu"
                        style={{ zIndex: 3 }}>
                        {/*<span className="cw f-25 cursor" id="close-menu">*</span>*/}
                        <div
                            className="py-5 circle-menu-place font-light w-80 mx-auto position-absolute center"
                            style={{borderRadius: "100%", width: "350px", height: "350px"}}
                        >
                            <div className="center position-absolute">
                                <a className="cb" href="/">
                                    <h2 className="cursor">صفحه اصلی</h2>
                                </a>
                                <a className="cb" href="/links">
                                    <h2 className="cursor">ارتباط با من</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header;