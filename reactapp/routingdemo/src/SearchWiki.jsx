import React from "react"

const SearchWiki =(props) =>{

return(
    <div>
        <input onChange={props.handleClick} type="text"/>
    </div>
    )
}

export default SearchWiki;