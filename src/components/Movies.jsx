import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    let {movies = []} = props;
    
    return (
        <div className="movies">
            {movies.length ? movies.map((movie) => {
                return <Movie key={movie.imdbID} {...movie}/>
            }) :
            <h3>Nothing found</h3>
        }
        </div>
    )

}

export { Movies };