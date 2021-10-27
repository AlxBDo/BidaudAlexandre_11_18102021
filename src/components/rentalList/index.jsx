import { Link } from 'react-router-dom'
import styled from 'styled-components'

import fetchData from '../../utils/hooks'

const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
`

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

const StyledP = styled.p`
    margin: -156px 0 -5px;
	color: white;
	padding: 99px 20px 10px;
	height: 50px;
	background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(2,0,0,0.9) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(2,0,0,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(2,0,0,0.9) 100%);
`

const StyledSection = styled.section`
    @media (min-width: 900px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: var(--background-color);
        border-radius: 25px;
        padding: 2%;
    }
`

class RentalList extends fetchData {

    render(){
        const {data, isLoading}  = this.state
        return(
            <StyledSection id="rentalList">
                {isLoading ? this.loadingData("locations de logements") : ( 
                    data.map((logement) => (
                        <StyledLink key={logement.id} to={`/Logement/${logement.id}`} className="flex">
                            <StyledImg key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                            <StyledP key={"title"+logement.id}>{logement.title}</StyledP>
                        </StyledLink>
                    )
                ))}
            </StyledSection>
        )
    }

}

export default RentalList