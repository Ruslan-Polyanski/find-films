import React from "react";
import { Movies } from "../components/Movies";

function Main(props){
    let {movies} = props;

    return (
        <div className="main">
            <Movies movies={movies}/>
        </div>
    )
}

export default Main;