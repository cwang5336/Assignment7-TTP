import React, {useState} from 'react'
import axios from 'axios';

function TrendingSearch(){

    const [trending, setTrending] = useState([])
    
    const handleTrendingSearch = event => {
        event.preventDefault();
        const API_KEY = "hIyf9OFsCA8t7g4iRuepLtyvI0Kw6jLj"
        const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY;
        axios 
            .get(url)
            .then((Response) =>{
                setTrending(Response.data.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className="container">
            <header>
                <button type="submit"  onClick={handleTrendingSearch}>Trending</button>
            </header>
            {
                trending.map(x => {
                    return <img key={x.key} src={x.images.original.url} />
                })
            }
        </div>
    )
}

export default TrendingSearch