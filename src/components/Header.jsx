import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="" />
                <a className="header-logo" href="/">
                    Brilliant Esteem School
                </a>
            </header>
        </>
    )
}

export default Header;