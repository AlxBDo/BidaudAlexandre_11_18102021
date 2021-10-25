import { Link } from 'react-router-dom'

import fetchData from '../../utils/hooks'


class RentalList extends fetchData {

    render(){
        const {data, isLoading}  = this.state
        return(
            <section id="rentalList">
                {isLoading ? (
                    <div id="loading-data"></div>
                ) : ( 
                    data.map((logement) => (
                        <Link key={logement.id} to={`/Logement/${logement.id}`}>
                            <img key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                            <p key={"title"+logement.id}>{logement.title}</p>
                        </Link>
                    )
                ))}
            </section>
        )
    }

}

export default RentalList