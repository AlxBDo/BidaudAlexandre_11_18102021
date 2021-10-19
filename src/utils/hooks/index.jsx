import { Component } from 'react'

class fetchData extends Component{

    constructor(url){
        super()
        this.url = url
        this.state = {
            data: {},
            isLoading: true,
            error: false,
        }
    }

    setData = (dataValue) => {
        this.setState({ data: dataValue })
    }

    updateError= (errorValue) => {
        this.setState({ error: errorValue })
    }

    updateLoading = (loadingState) => {
        this.setState({ isLoading: loadingState })
    }

    

    async fectData(url){
        try{
            let response = await fetch(url)
            this.setData(await response.json())
        } catch (err){
            console.error(err)
        } finally { this.updateLoading(false) }
    }

    getData(){
        const url = this.url
        if(!url){ return this.updateLoading(true) 
        } else {
            const [data, isLoading, error] = this.state
            this.useEffect(() => { this.fectData() }, [url])
            return [data, isLoading, error]
        }
    }

}

export default fetchData