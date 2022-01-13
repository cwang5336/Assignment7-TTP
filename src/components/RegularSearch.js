import React, {useState} from 'react'
import axios from 'axios';

function RegularSearch(){

    const [search, setSearch] = useState([])
    const [searchInput, setSearchInput] = useState("")


    const onChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearch = event => {
        event.preventDefault();
        const keyword = searchInput;
        const API_KEY = 'hIyf9OFsCA8t7g4iRuepLtyvI0Kw6jLj'
        const path = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}`

        axios
            .get(path)
            .then((response) => {
                setSearch(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

         return (
            <div className="container">
                <header>
                    <form id="search-form">
                    <input id="search-input" type="text" placeholder="keyword" onChange={onChange}/>
                    <button type="submit"  onClick={handleSearch}>Search</button>
                    </form>
                </header>
                

                {
                    search.map(e => {
                        return <img key={e.key} src={e.images.original.url} />
                    })
                }

            </div>
        )

}


export default RegularSearch