import React from "react";
import "../styles/detail.css";

  const MovieModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <h2>{props.movie.title}</h2>
            <div className="content">
                <div>status : {props.movie.status}</div>
                <div>tagline : {props.movie.tagline}</div>
                <div>release date : {props.movie.release_date}</div>
                <div>runtime : {props.movie.runtime}</div>
            </div>
            <div>
                <button onClick={props.onClose}>close</button>
            </div>    
        </div>
    );
  }

export default MovieModal