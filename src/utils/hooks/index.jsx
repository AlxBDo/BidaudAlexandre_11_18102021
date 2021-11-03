import { Component } from 'react'
import styled from 'styled-components'

const LoadingMessage = styled.div`
    color: lightgreen;
    font-size: x-large;
    font-weight: 500;
    @media (max-width: 899px){
        margin: 30% auto;
        text-align: center;
    }
    @media (min-width: 900px){ margin: 10% auto 12%; }
`

const LoadingIcon = styled.p`
    border: 10px solid lightgreen;
	height: 50px;
	width: 50px;
	border-radius: 100px;
	border-bottom-color: transparent;
	animation: loading 700ms linear infinite;
    @media (max-width: 899px){ margin: 0 auto 30%; }
    @media (min-width: 900px){ margin: 0 auto 15%; }
`

class fetchData extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {},
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://alxbdo.github.io/BidaudAlexandre_11_18102021/src/datas/logements.json")
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(this.props.match){
                for(let logement of jsonResponse){
                    const { id_logement } = this.props.match.params
                    if(logement.id === id_logement){ 
                        this.setState({ data: logement, isLoading: false }) 
                        return true
                    }
                }
                this.setState({error: true})
            } else { this.setState({ data: jsonResponse, isLoading: false }) }
        })
    }

    loadingData(dataNames){ 
        return(
            <LoadingMessage className="loading-data">
                <LoadingIcon> </LoadingIcon>
                Récupération des {dataNames}
            </LoadingMessage>
        )
    }

}

export default fetchData