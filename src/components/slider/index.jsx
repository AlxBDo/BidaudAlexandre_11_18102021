import { Component } from 'react'
import styled from 'styled-components'

import nextIconPicture from '../../assets/next.png'
import previousIconPicture from '../../assets/previous.png'


const MoveIcon = styled.div`
    ${(props) => props.$name === "next" ? (
        `background-image: url(${nextIconPicture}); 
        right: 2%;`
    ) : (
        `background-image: url(${previousIconPicture}); 
        left: 2%;`
    )}
`

const PictureSlider = styled.img`
    object-fit: cover;
    border-radius: 20px;
    width: 0;
    transition: width 250ms ease-in-out;
    @media (max-width: 899px){
        height: 255px;
    }
    @media (min-width: 900px){
        height: 415px;
    }
`
const SliderContainer = styled.section`
    overflow: hidden;
    max-height: 415px;
    align-items: center;
    background-color: var(--background-color);
    position: relative;
    @media (max-width: 899px){
        border-radius: 10px;
    }
    @media (min-width: 900px){
        border-radius: 20px;
    }
`

class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {pictures: props.pictures}
    }

    getPicturesSum = () => { return this.state.pictures.length }

    moveSlider = (e)=>{
        let move = e.target.getAttribute("id") === "next" ? 1 : -1
        let currentPicture = document.querySelector(".activ")
        currentPicture.classList.remove("activ")
        currentPicture.classList.add("inactiv")
        let pictureNumber = parseInt(currentPicture.getAttribute('id').split("-")[1])
        if(pictureNumber + move < 0){
            pictureNumber = (this.getPicturesSum() - 1)
        } else if (pictureNumber + move > (this.getPicturesSum() - 1)){
            pictureNumber = 0
        } else { pictureNumber = parseInt(pictureNumber) + move }
        let pictureDisplay = document.getElementById("picture-"+pictureNumber.toString())
        pictureDisplay.classList.add("activ")
        pictureDisplay.classList.remove("inactiv")
    }

    render(){
        const pictures = this.state.pictures
        return(
            <SliderContainer 
                id="logement-pictures" 
                className={this.getPicturesSum() > 1 ? "slider flex" : "flex" }
            >
                <MoveIcon 
                    $name={"previous"} 
                    id="previous" 
                    className="slider-btn" 
                    onClick={(e)=> this.moveSlider(e)} 
                />
                    {pictures.map((picture, index) => (
                        <PictureSlider 
                            key={picture.substring(102, 106)} 
                            src={picture} 
                            id={`picture-${index}`}
                            className={picture === pictures[0] ? "activ" : ""} 
                            alt="" 
                        />
                    ))}
                <MoveIcon 
                    $name={"next"} 
                    id="next" 
                    className="slider-btn"
                     onClick={(e)=> this.moveSlider(e)} 
                />
            </SliderContainer>
        )
    }

}

export default Slider