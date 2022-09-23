import React, { useState } from "react";

function Search ({callBack}) {

    const [search, setSearch] = useState('');
    const [typeFilm, setTypeFilm] = useState('all');

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
            callBack(search, typeFilm)
        }
      }

      const handleChange = (e) => {
        setTypeFilm(e.target.value)
        callBack(search, e.target.value)
      }

        return (
            <div className="search">
                <input 
                    name="search" 
                    type="text" 
                    className="search__input"
                    placeholder="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)} 
                    onKeyPress={handleKeyPress}
                />
                <br />
                <div className="inputs">
                    <label>
                        <input 
                            type="radio" 
                            name="typeFilm" 
                            value='all' 
                            onChange={handleChange}
                            checked={typeFilm === 'all'}
                        /> All
                    </label>
                    <label>
                        <input 
                            type="radio"    
                            name="typeFilm"    
                            value='movie'    
                            onChange={handleChange}
                            checked={typeFilm === 'movie'}
                        /> Movie
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="typeFilm" 
                            value='series' 
                            onChange={handleChange}
                            checked={typeFilm === 'series'}
                        /> Series
                    </label>
                </div>
            </div>

        )
}

export default Search;
