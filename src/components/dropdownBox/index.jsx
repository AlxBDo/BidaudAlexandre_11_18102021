import { Component  } from "react";

class DropdownBox extends Component {

    constructor(props){
        super(props)
        this.state = {text: props.text, id: props.id, state: props.state}
    }

    changeState = ()=> { 
        this.setState({state: this.state.state === "open" ? "close" : "open"}) 
    }

    render(){
        const { text, id, state } = this.state
        const id_html = id.toString().toLowerCase()
        return(
            <div key={id} className={`dropdown-box ${state}`} onClick={this.changeState} >
                <a id={`${id_html}-link`} href={`#${id_html}`}>{id}</a>
                {Array.isArray(text) ? (
                    <ul key={id_html} id={id_html}> { text.map((li) => ( <li key={li.toString()}>{li}</li> )) } </ul>
                    ) : ( <p key={id_html} id={id_html}>{ text.toString() }</p> )
                }
            </div>
        )
    }

}

export default DropdownBox