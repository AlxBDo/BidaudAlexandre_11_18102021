import { Component } from "react";
import styled from "styled-components";

const Star = styled.span`
    background-image: url("https://alxbdo.github.io/BidaudAlexandre_11_18102021/src/assets/inactiv_star.png");
    display: inline-block;
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 899px){
        width: 16px;
		height: 16px;
		margin-right: 3px;
    }
    @media (min-width: 900px){
        width: 25px;
		height: 25px;
		margin-right: 5px;
    }
`

class Rating extends Component {

    constructor(props){
        super(props)
        this.state = {grade: props.grade}
    }

    render(){
        const {grade} = this.state
        return(
            <p key={`rating`} id="rating" className={`star${grade}`}>
                <Star key={"star1"} />
                <Star key={"star2"} />
                <Star key={"star3"} />
                <Star key={"star4"} />
                <Star key={"star5"} />
            </p>
        )
    }

}

export default Rating