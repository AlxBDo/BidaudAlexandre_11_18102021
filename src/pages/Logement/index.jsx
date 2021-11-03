import fetchData from '../../utils/hooks'
import DropdownBox from '../../components/dropdownBox'
import Tags from '../../components/tags'
import Rating from '../../components/rating'
import Slider from '../../components/slider'
import Error from '../../components/error'



class Logement extends fetchData {

    render(){
        const { data, isLoading, error } = this.state
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
                {error ? (<Error />) : null }
                {!Array.isArray(pictures) ? this.loadingData("images") : ( <Slider pictures={pictures} /> )}
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