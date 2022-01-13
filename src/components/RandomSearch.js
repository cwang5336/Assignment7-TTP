import React, {useState} from 'react'
import axios from 'axios';

function RandomSearch(){

    const [randomGifs, setRandom] = useState([])

    const handleRandomSearch = event => {
        event.preventDefault();
        const API_KEY = "hIyf9OFsCA8t7g4iRuepLtyvI0Kw6jLj"
        const url = "http://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
        axios 
            .get(url)
            .then((Response) =>{
                setRandom(Response.data.data.images.original.url)
            })
            .catch((err) => {
                console.log(err)
            });
    }


    return (
        <div className="container">
            <header>
                <button type="submit"  onClick={handleRandomSearch}>Random</button>
            </header>
            

            {
                randomGifs.map(x => {
                    return <img key={x.key} src={randomGifs} />
                })
            }

        </div>
    )

}

export default RandomSearch;
