import axios from "axios";
import { Component } from "react";

class test extends Component{
    constructor(){
        super();
        this.state={
            search:[],
            searchInput:"",
            show: false
        }
    }

    onChange = (event) => {
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        const searchInput = this.state.searchInput;
        const API_KEY = 'hIyf9OFsCA8t7g4iRuepLtyvI0Kw6jLj'
        const path = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}`
        axios
            .get(path)
            .then((response) => {
                this.setState({search: response.data.data});
                this.setState({show: true});
            })
            .catch((error) => {
                this.setState({show: false});
                console.log(error);
            });
    }

    render(){
        let display;

        if(this.state.show === true){
            display = <div>{this.state.search.map(data => {
                return(
                    <div className="gif-images">
                        <img src={data.images.original.path} />
                    </div>
                )
            })}</div>
        }

        if(this.state.show === false){
            display = null;
        }


        return(
            <div className="container">
                <form onChange={this.onChange}>
                    <input type="text"/>
                    <button id="searchButton" type="submit" value={this.handleSearch} onClick={this.render} >Search</button>
                </form>
            </div>
        )





    }
}

export default test