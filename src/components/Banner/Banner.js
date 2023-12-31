import React, { useEffect, useState } from 'react'
import axios from '../axios.js'
import { API_KEY,imageUrl } from '../../constants/constants.js'
import './Banner.css'

function Banner() {
    let [movie,setMovie]= useState()

    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
          console.log(response.data.results);
        
            setMovie(response.data.results[2])
        })
         
    },[])
  return (

    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
          <div className="fade_bottom">

          </div>
    </div>
   
 
    
  )
}

export default Banner
