import { Link } from "react-router-dom"
import { Component } from "react"
import Logo from '../../assets/LOGO.svg'

import '../../utils/style/global.css'

class Header extends Component {

    render() {
        return (
            <header>
                <img src={Logo} alt="Kasa logo"/>
                <nav>
                    <Link to="/"> Accueil </Link>
                    <Link to="/A-Propos">A Propos</Link>
                </nav>
            </header>
        )
    }

}

export default Header
