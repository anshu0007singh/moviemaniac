import React from 'react'
import './MovieCard.css'
import image from '../assets/imagesLink/images'

const MovieCard = ({movie}) => {
  return (
    <div className="main">
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie_card'>
        {/* have to put the API data */}
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className='movie_poster'/>

        <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.original_title}</h3>
            <div className="align_center movie_date_rate">
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}<img src={image.star} alt="rating icon" className = "card_emoji" /></p>
            </div>
            <p className='movie_description'>
                {movie.overview.slice(0,100)+"..."}
            </p>
        </div>
    </a>
    </div>
  )
}

export default MovieCard
