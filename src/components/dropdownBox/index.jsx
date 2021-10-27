import { Component  } from "react";
import styled from "styled-components";

import closeIcon from '../../assets/dropdown_close.png'
import openIcon from '../../assets/dropdown_open.png'

const StyledDiv = styled.div`
    @media (min-width: 900px){ width: 40%; }
    ${(props) => props.$state === "open" ? (
        `@media (max-width: 899px){ margin-bottom: 25px; } `) : (`
        height: 50px;
    `)}
`

const StyledLi = styled.li`
    list-style: none;
`

const StyledLink = styled.a`
    &:after{
        float: right;
        background-size: contain;
        content: "";
        background-repeat: no-repeat;
        background-position: center;
        margin-right: -1%;
        ${(props) => props.$state === "open" ? (
            `background-image: url(${openIcon}); 
        `) : (`
            background-image: url(${closeIcon});
        `)}
        @media (max-width: 899px){
            width: 15px;
            height: 15px;
        }
        @media (min-width: 900px){
            width: 28px;
            height: 17px;
        }
    }
    background-color: var(--first-color);
    display: block;
    color: white;
    text-decoration: none;
    border-radius: 7px;
    padding: 2% 4%;
    @media (max-width:  899px){
        font-size: small;
    }
    @media (min-width: 900px){
        font-size: medium;
    }
`

class DropdownBox extends Component {

    constructor(props){
        super(props)
        this.state = {text: props.text, id: props.id, state: props.state}
    }

    changeState = ()=> { 
        this.setState({state: this.state.state === "open" ? "close" : "open"}) 
    }

    render(){
        const { text, id, state } = this.state
        const id_html = id.toString().toLowerCase().replace("é", "e")
        return(
            <StyledDiv 
                $state={state} 
                key={id} 
                className={`dropdown-box ${state}`} 
                onClick={this.changeState} 
            >
                <StyledLink 
                    $state={state} 
                    id={`${id_html}-link`} 
                    href={`#${id_html}-link`}
                >{id}</StyledLink>
                {Array.isArray(text) ? (
                    <ul key={id_html} id={id_html}> 
                        { text.map((li) => ( <StyledLi key={li.toString()}>{li}</StyledLi> )) } 
                    </ul>
                    ) : ( <p key={id_html} id={id_html}>{ text.toString() }</p> )
                }
            </StyledDiv>
        )
    }

}

export default DropdownBox