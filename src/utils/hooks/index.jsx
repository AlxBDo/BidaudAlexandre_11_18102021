import { Component } from 'react'

class fetchData extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        fetch("https://alxbdo.github.io/BidaudAlexandre_11_18102021/src/datas/logements.json")
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(this.props.match){
                for(let logement of jsonResponse){
                    const { id_logement } = this.props.match.params
                    if(logement.id === id_logement){ this.setState({ data: logement, isLoading: false }) }
                }
            } else { this.setState({ data: jsonResponse, isLoading: false }) }
        })
    }

}

export default fetchData