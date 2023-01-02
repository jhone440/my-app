import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from './Movie.module.css'

export default function MovieList({id, medium_cover_image, title, summary, genres}) {
  return (
    <div className={styles.movie}>                
        <img src={medium_cover_image} alt={title} className={styles.movie__img}/>
        <h2 className={styles.movie__title} ><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary.length> 233 ? `${summary.slice(0,233)} ...` : summary}</p>
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
