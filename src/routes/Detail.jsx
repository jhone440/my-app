import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function Detail() {
  const {id} = useParams()
  const [movieDetail, setMoveDetail] = useState([])
  const getMovie = async() => {
    const response =  await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMoveDetail(json.data.movie)
  }
    
  useEffect(() => { 
    getMovie();
  },[])
  // useEffect(() => {fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(response => response.json().then((movieDetail) => setMoveDetail(movieDetail.data.movie)))}, [])
  return (
    <div>{movieDetail.title}</div>
  )
}
