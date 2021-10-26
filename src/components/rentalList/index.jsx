import { Link } from 'react-router-dom'
import styled from 'styled-components'

import fetchData from '../../utils/hooks'

const StyledLink = styled(Link)`
    overflow: hidden;
    flex-direction: column;
    text-decoration: none;
    border-radius: 10px;
    @media (max-width: 899px){
        margin: 0% 0% 5%;
		height: 285px;
    }
    @media (min-width: 900px){
        width: 27%;
        margin: 3% 3% 2%;
        height: 340px;
    }
`

class RentalList extends fetchData {

    render(){
        const {data, isLoading}  = this.state
        return(
            <section id="rentalList">
                {isLoading ? (
                    <div id="loading-data"></div>
                ) : ( 
                    data.map((logement) => (
                        <StyledLink key={logement.id} to={`/Logement/${logement.id}`} className="flex">
                            <img key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                            <p key={"title"+logement.id}>{logement.title}</p>
                        </StyledLink>
                    )
                ))}
            </section>
        )
    }

}

export default RentalList