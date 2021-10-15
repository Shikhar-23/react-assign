import React from 'react';
const SearchBox = (props) => {
    const handleChange = (e) =>{
        props.setSearchValue(e.target.value);
    }
    return(
        <div class = "inp">
            <input className = "form-control"
             placeholder = "Type to Search..." 
             value = {props.value} 
             onChange ={() => handleChange}
             onSubmit = {props.getMovieRequest()}
             >
            </input> 
        </div>
    );
}

export default SearchBox;
