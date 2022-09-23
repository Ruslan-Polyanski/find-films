import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Search from "./components/Search";
import Preloader from "./components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

function App () {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  const findeFilms = (value, type = 'all') => {
    setLoading(true)
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : `&type=`}`)
      .then(resolve => resolve.json())
      .then(data => {
        setFilms(data.Search)
        setLoading(false)})
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    .then(resolve => resolve.json())
    .then(data => {
      setFilms(data.Search)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }, [])

    return (
      <div>
        <Header />
        <h1>My movies</h1>
          <Search callBack={findeFilms}/>
          {
            loading ? <Preloader/> : <Main movies={films}/>
          }
        <Footer />
      </div>
    )
}

export default App;


