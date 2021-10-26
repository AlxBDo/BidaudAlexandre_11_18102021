import { Component } from "react";
import styled from "styled-components";

const UlTags = styled.ul`
    padding: 0;
	margin: 0;
`
const LiTag = styled.li`
    background-color: var(--first-color);
    display: inline-block;
    color: white;
    @media (max-width: 899px){
        margin: 0 5% 1% 0;
		border-radius: 5px;
		font-size: xx-small;
		padding: 1% 5%;
    }
    @media (min-width: 900px){
        margin: 0 1% 0 0;
        border-radius: 30px;
        font-size: x-small;
        padding: 0.5% 5%;
    }
`

class Tags extends Component {

    constructor(props){
        super(props)
        this.state = {tags: props.tags}
    }

    render(){
        const {tags} = this.state
        return(
            <UlTags> {tags.map((tag) => ( <LiTag key={tag}>{tag}</LiTag> ))} </UlTags>
        )
    }

}

export default Tags