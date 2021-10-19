import { Component } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const HomePageReturnLink = styled(Link)`
    color: var(--first-color);
`


class Error extends Component {

    render() {
        return(
            <main className="error-msg">
                <div>
                    <p id="page-not-found">404</p>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div>
                    <HomePageReturnLink to="/">Retourner sur la page d'accueil</HomePageReturnLink>
                </div>
            </main>
        )
    }

}

export default Error