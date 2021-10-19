import { Component } from "react";
import fetchData from "../../utils/hooks";

class RentalList extends Component{

    render(){
        let myData = new fetchData()
        const data = myData.getData("../../datas/logements.json")
        console.log(data)
        return(
            <div>Mes datas en console.log</div>
        )
    }

}

export default RentalList