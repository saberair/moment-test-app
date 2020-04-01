import React from 'react'
import "../styles/movie.css"

const Movie = (props) => {
    return (
        <div className="btn" role="button" onClick={() => props.showDetails(props.id)} >{props.title}</div>
    );
}

export default Movie