import React, { useEffect, useState } from 'react'
import loadash from 'lodash'
import './MovieList.css'
import image from '../assets/imagesLink/images'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'
const MovieList = ({type,title,emoji}) => {

    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by: "default",
        order:"asc"
    })
    useEffect(() => {
        fetchMovies();
    },[])

    useEffect(() => {
        if(sort!=="default"){
            const sortedMovies = loadash.orderBy(movies,[sort.by],[sort.order]);
            setMovies(sortedMovies);
        }
    },[sort])

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies,allMovies]);

    useEffect(() => {
        localStorage.setItem('allMovies', JSON.stringify(allMovies));
    }, [allMovies]);

    const handlefilter = (rate) =>{
        if(rate==minRating){
            setMinRating(0);
            setMovies(JSON.parse(localStorage.getItem('allMovies')));
        }else{
            setMinRating(rate);
            const storedmovies = JSON.parse(localStorage.getItem('allMovies'))
            const filtermovies = storedmovies.filter((movie) => movie.vote_average>=rate)
            setMovies(filtermovies);
        }
    }

    const fetchMovies = async () =>{
        console.log(type)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=d5c5dfdab6cd5742883f1a55f00ef509`)
        const data = await response.json()
        setMovies(data.results)
        setAllMovies(data.results)
        };

    const handleSort = e => {
            const { name, value } = e.target;
            setSort(prev => ({ ...prev, [name]: value }));
        }

  return (
    <section className='movie_list' id = {type}>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>{title}<img src={emoji} alt={`{emoji} icon`} className='navbar_emoji'/></h2>
            <div className='align_center movie_list_fs'>
                <FilterGroup minRating = {minRating} onRatingClick = {handlefilter} ratings = {[8,7,6]}></FilterGroup>
                <select name="by" onChange = {handleSort} value = {sort.by} className='movie_sorting'>
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" onChange = {handleSort} value = {sort.order} className='movie_sorting'>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </header>

        <div className="moviess_card">
            {
                movies.map((movie) => <MovieCard key={movie.id} movie = {movie}></MovieCard>)
            }
        </div>
    </section>
  )
}

export default MovieList
