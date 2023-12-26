import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../axios.js'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
    let [url, setUrl] = useState()
    let [orgMovie, setOrgMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {

            setOrgMovie(response.data.results)
        })





    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const movieTrailer = (id) => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response);
            if (response.data.results.length !== 0) {
                setUrl(response.data.results[0])
            }
        })
    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className="posters">
                {
                    orgMovie.map((movie) =>
                        <img onClick={() => { movieTrailer(movie.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="posters" />

                    )

                }



            </div>
            {url && <Youtube videoId={url.key} opts={opts} />}

        </div>

    )
}

export default Rowpost
