import fetchData from '../../utils/hooks'

class Logement extends fetchData {

    loadingData(dataNames){ 
        //return "<div class=\"loading-data\">Récupération des données</div>"
        return(
            <div className="loading-data">Récupération des {dataNames}</div>
        )
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
                <section id="logement-pictures">
                    {!Array.isArray(pictures) ? this.loadingData("images") : ( 
                        pictures.map((picture) => (
                            <img 
                                key={picture.substring(102, 106)} 
                                src={picture} 
                                className={picture === pictures[0] ? "activ" : ""} 
                                alt=""
                            />
                        )
                    ))}
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
                <section id="details">
                    <div className="dropdown-box">
                        <a id="description-link" href="#description">Description</a>
                        <p id="description">{description}</p>
                    </div>
                    <div className="dropdown-box">
                        <a id="equipments-link" href="#equipments">Equipement</a>
                        <ul id="equipments">
                            {isLoading ? this.loadingData("équipements") : (
                                equipments.map((equipment) =>(
                                    <li key={equipment}>{equipment}</li>
                                ))
                            )}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }

}

export default Logement