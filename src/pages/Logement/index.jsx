import styled from 'styled-components'

import fetchData from '../../utils/hooks'
import DropdownBox from '../../components/dropdownBox'
import Tags from '../../components/tags'
import Rating from '../../components/rating'

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


class Logement extends fetchData {

    loadingData(dataNames){ 
        return(
            <div className="loading-data">Récupération des {dataNames}</div>
        )
    }

    moveSlider = (e)=>{
        let move = e.target.getAttribute("id") === "next" ? 1 : -1
        let currentPicture = document.querySelector(".activ")
        currentPicture.classList.remove("activ")
        currentPicture.classList.add("inactiv")
        let pictureNumber = parseInt(currentPicture.getAttribute('id').split("-")[1])
        if(pictureNumber + move < 0){
            pictureNumber = (this.state.data.pictures.length - 1)
        } else if (pictureNumber + move > (this.state.data.pictures.length - 1)){
            pictureNumber = 0
        } else { pictureNumber = parseInt(pictureNumber) + move }
        let pictureDisplay = document.getElementById("picture-"+pictureNumber.toString())
        pictureDisplay.classList.add("activ")
        pictureDisplay.classList.remove("inactiv")
    }

    render(){
        const { data, isLoading } = this.state
        const {
            title, 
            pictures, 
            description, 
            host, 
            rating, 
            location, 
            equipments, 
            tags
        } = data
        return(
            <main>
                {!Array.isArray(pictures) ? this.loadingData("images") : ( 
                <section id="logement-pictures" className={pictures.length > 1 ? "slider flex" : "flex" }>
                    <MoveIcon $name={"previous"} id="previous" className="slider-btn" onClick={(e)=> this.moveSlider(e)} />
                        {pictures.map((picture, index) => (
                            <img 
                                key={picture.substring(102, 106)} 
                                src={picture} 
                                id={`picture-${index}`}
                                className={picture === pictures[0] ? "activ" : ""} 
                                alt="" 
                            />
                        ))}
                    <MoveIcon $name={"next"} id="next" className="slider-btn" onClick={(e)=> this.moveSlider(e)} />
                </section>
                )}
                <section id="top-infos">
                    <div>
                        <h1>{title}</h1>
                        <p id="location">{location}</p>
                        {Array.isArray(tags) && <Tags tags={tags} />}
                    </div>
                    <div>
                        {typeof host !== "object" ? this.loadingData("informations du propriétaire") : (
                            <div id="host" className="flex">
                                <img key="host-picture" src={host.picture} alt="Propriétaire" />
                                <p key="host-name">{host.name}</p>
                            </div>
                        )}
                        {typeof rating !== "undefined" ? <Rating grade={rating} /> : null }
                    </div>
                </section>
                {isLoading ? this.loadingData("détails du logement") : (
                    <section id="details">
                        <DropdownBox text={description} id={"Description"} state={"open"} />
                        <DropdownBox text={equipments} id={"Équipements"} state={"open"} />
                    </section>
                )}
            </main>
        )
    }

}

export default Logement