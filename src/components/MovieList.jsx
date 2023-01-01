import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

export default function MovieList({id, medium_cover_image, title, summary, genres}) {
  return (
    <div>                
        <img src={medium_cover_image} alt={title}/>
        <h1><Link to={`/movie/${id}`}>{title}</Link></h1>
        <p>{summary}</p>
        <ul>
            {genres.map((g) =><li key={g}>{g}</li> )}
        </ul>
    </div>
  )
}

MovieList.prototype = {
    id: PropTypes.number.isRequired, 
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 
}
