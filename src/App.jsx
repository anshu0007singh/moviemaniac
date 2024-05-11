import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MovieList from './Components/MovieList'
import image from './assets/imagesLink/images'
const App = () => {
  return (
    <div className = 'app'>
      <Navbar></Navbar>
      <MovieList type = "popular" title = "Popular" emoji = {image.fire}></MovieList>
      <MovieList type = "top_rated" title = "Top Rated" emoji = {image.star}></MovieList>
      <MovieList type = "upcoming" title = "Upcomming" emoji = {image.party}></MovieList>
    </div>
    
  )
}

export default App
