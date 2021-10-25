import styled from 'styled-components'

import fetchData from '../../utils/hooks'
import DropdownBox from '../../components/dropdownBox'


import nextIconPicture from '../../assets/next.png'
import previousIconPicture from '../../assets/previous.png'

const NextIcon = styled.div`
    background-image: url(${nextIconPicture}); 
    right: 2%;
`

const PreviousIcon = styled.div`
    background-image: url(${previousIconPicture}); 
    left: 2%;
`

class Logement extends fetchData {

    pictureSum = 0

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
        if(pictureNumber + move === 0){
            pictureNumber = this.state.data.pictures.length
        } else if (pictureNumber + move > this.state.data.pictures.length){
            pictureNumber = 1
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
        let picturesCounter = 1
        return(
            <main>
                <section id="logement-pictures" className={Array.isArray(pictures) && pictures.length > 1 ? "slider" : null }>
                    <PreviousIcon id="previous" className="slider-btn" onClick={(e)=> this.moveSlider(e)} />
                    {!Array.isArray(pictures) ? this.loadingData("images") : ( 
                        pictures.map((picture) => (
                            <img 
                                key={picture.substring(102, 106)} 
                                src={picture} 
                                id={`picture-${picturesCounter++}`}
                                className={picture === pictures[0] ? "activ" : ""} 
                                alt=""
                            />
                        )
                    ))}
                    <NextIcon id="next" className="slider-btn" onClick={(e)=> this.moveSlider(e)} />
                </section>
                <section id="top-infos">
                    <div>
                        <h1>{title}</h1>
                        <p id="location">{location}</p>
                        <ul>
                            {!Array.isArray(tags) ? this.loadingData("tags") : ( 
                                tags.map((tag) => ( <li key={tag}>{tag}</li> ))
                            )}
                        </ul>
                    </div>
                    <div>
                        {typeof host !== "object" ? this.loadingData("informations du propriétaire") : (
                            <div id="host">
                                <img key="host-picture" src={host.picture} alt="Propriétaire" />
                                <p key="host-name">{host.name}</p>
                            </div>
                        )}
                        <p id="rating" className={"star"+rating}>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </p>
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