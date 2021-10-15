import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (<div>
                    <img src = {movie.Poster} alt = 'movie' onClick = {() => {
                        renderPage(movie, props);
                        // console.log(movie, props);
                        window.alert('done');
                    }}></img>
                </div>))}
        </>
    );
};

const renderPage = (movie, props) =>{
    return(
        <>
            <h1>{movie.Title}</h1>
            <text>
                <img src = {movie.Poster}> </img>
                    Type = {movie.Type} \n
                    Year Released: {movie.Year} \n

            </text>        
        </>    
    );
}

export default MovieList;