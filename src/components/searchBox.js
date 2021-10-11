import React from 'react';

const SearchBox = (props) => {
    return(
        <div class = "inp">
            <input className = "form-control"
             placeholder = "Type to Search..." 
             value = {props.value} 
             onChange= {(event) => props.setSearchValue(event.target.value)} >
                </input> 
        </div>
    );
}

export default SearchBox;
