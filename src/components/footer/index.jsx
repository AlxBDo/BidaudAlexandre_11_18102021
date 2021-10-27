import { Component } from "react";
import styled from "styled-components";

import logoFooter from '../../assets/LOGO_footer.svg'

const StyledDiv = styled.div`
    margin-top: 2%;
    font-weight: 500;
`

const StyledFooter = styled.footer`
    background-color: black;
    padding: 3%;
    color: white;
    text-align: center;
`

class Footer extends Component {

    render() {
        return (
            <StyledFooter>
                <img src={logoFooter} alt="Kasa logo" />
                <StyledDiv>© 2020 Kasa. All rights reserved</StyledDiv>
            </StyledFooter>
        )
    }

}

export default Footer