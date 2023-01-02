import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MovieList from './MovieList'
import styles from './Movie.module.css'

export default function Movie() {
    const[loading, setLoading] = useState(true)
    const[data, setData] = useState([])
    const getMovies = async () => {
        console.log("you reached! here")
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?quality=3D");
        const json = await response.json();
        setData(json.data.movies);
        setLoading(false);
        }
    
    useEffect(()=>
        {
            getMovies();
        },[]);


    return (
        <div>
            <div className={styles.container}>
            <h1>Movie list {loading ? "": <span>({data.length})</span>  }</h1>
            {loading ? <h1>Loading...</h1>: <div>{data.map((movie) => 
            <MovieList 
            key={movie.id} 
            id={movie.id} 
            medium_cover_image={movie.medium_cover_image} 
            title={movie.title} summary={movie.summary} 
            genres={movie.genres} 
            /> )}</div> 
            }
            </div>

        </div>
    )
}
