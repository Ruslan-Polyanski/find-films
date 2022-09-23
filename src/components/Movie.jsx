import React from 'react';

function Movie(props) {
    const {
        Poster: poster, 
        Title: title, 
        Year: year, 
        Type: type,
        imdbID: id
    } = props;
    return (
        <div id={id} className="movie card">
            <div className='movie__title'>
                <h2>{title}</h2>
            </div>
            <div className='movie__poster'>
                <img src={poster} alt={title}/>
            </div>
            <div className='movie__box'>
                <div className='movie__type'>{type}</div>
                <div className='movie__yeat'>{year}</div> 
            </div>
        </div>
    )
}

export { Movie };