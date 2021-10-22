import fetchData from '../../utils/hooks'

import DropdownBox from '../../components/dropdownBox'

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
        if(pictureNumber + move === 0){
            pictureNumber = parseInt(document.getElementById("pictures-sum").value) - 1
        } else if (pictureNumber + move + 1 === parseInt(document.getElementById("pictures-sum").value)){
            pictureNumber = 0
        } else { pictureNumber = parseInt(pictureNumber) + move }
        console.log("Picture number is ", pictureNumber)
        let pictureDisplay = document.getElementById("picture-"+pictureNumber)
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
        let logementPicturesSectionClass = typeof pictures !== "undefined" && pictures.lenght > 0 ? "slider start-mode" : null
        let picturesCounter = 1
        return(
            <main>
                <section id="logement-pictures" className={logementPicturesSectionClass}>
                    <div id="previous" className="slider-btn" onClick={(e)=> this.moveSlider(e)}></div>
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
                    <div id="next" className="slider-btn" onClick={(e)=> this.moveSlider(e)}></div>
                    <input type="hidden" id="pictures-sum" value={picturesCounter} />
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