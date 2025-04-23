import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="briliant esteem logo" />
            <div className="row">
                <ul>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">Follow us</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">Programmes & Events</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">About us</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">Classes</a>
                    </li>
                </ul>
            </div>
            <p>Copyright © {new Date().getFullYear()} Brilliant Esteem School</p>
        </footer>
    )
}

export default Footer;