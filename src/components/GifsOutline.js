import React, {Component, Fragment} from 'react'

const GifsOutline = (props) => {
    const items = props.gifs.map((itemData) => {
        return <Item url = {itemData.url} />
    })
    return(
        <div>
            {items}
        </div>
    )
}

const Item = (props) => {
    return(
        <div>
            <img scr = {props.url} />
        </div>
        
    )
}

export default GifsOutline;