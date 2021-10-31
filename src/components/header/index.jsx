import { Link } from "react-router-dom"
import { Component } from "react"
import styled from "styled-components"

import Logo from '../../assets/LOGO.svg'

const StyledHeader = styled.header`
    width: 90%;
    justify-content: space-between;
    @media (max-width: 899px){
        margin: 5% auto;
		align-items: center;
    }
    @media (min-width: 900px){
        margin: 2% auto;
		align-items: baseline;
		max-width: 1250px;
    }
`

const StyledLink = styled(Link)`
    color: var(--first-color);
    margin-left: 5%;
    font-family: Montserrat;
    font-weight: 500;
    text-decoration: none;
    @media (max-width: 899px){
        font-size: small;
		text-transform: uppercase;
    }
    @media (min-width: 900px){ font-size: x-large; }
`

const StyledNav = styled.nav`
    width: 50%;
    text-align: right;
`

class Header extends Component {

    render() {
        let currentPath = this.props.location.pathname.split("/")[1]
        let linkClass = "current-page"
        return (
            <StyledHeader className={"flex"}>
                <img src={Logo} alt="Kasa logo"/>
                <StyledNav>
                    <StyledLink 
                        to="/" 
                        className={currentPath === "" ? linkClass : null }
                    > 
                        Accueil 
                    </StyledLink>
                    <StyledLink 
                        to="/A-Propos" 
                        className={currentPath === "A-Propos" ? linkClass : null }
                    >
                        A Propos
                    </StyledLink>
                </StyledNav>
            </StyledHeader>
        )
    }

}

export default Header
