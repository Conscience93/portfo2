import React from "react";

// destructuring - ({...}) allows us to grab the props object and grab its properties
const SearchBox = ({ searchChange }) => {

    return (<div>
        <input 
            className = "pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder="search robots"
            onChange={searchChange}
        />
    </div>
    )
}

export default SearchBox