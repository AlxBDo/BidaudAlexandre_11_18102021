import { Link } from "react-router-dom"
import { Component } from "react"
import Logo from '../../assets/LOGO.svg'

class Header extends Component {

    render() {
        let currentPath = this.props.location.pathname.split("/")[1]
        let linkClass = "current-page"
        return (
            <header>
                <img src={Logo} alt="Kasa logo"/>
                <nav>
                    <Link to="/" className={currentPath === "" ? linkClass : null }> Accueil </Link>
                    <Link to="/A-Propos" className={currentPath === "A-Propos" ? linkClass : null }>A Propos</Link>
                </nav>
            </header>
        )
    }

}

export default Header
