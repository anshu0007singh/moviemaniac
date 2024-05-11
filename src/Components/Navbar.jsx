import React from 'react'
import image from '../assets/imagesLink/images'
import './Navbar.css'
import DarkMode from './DarkMode'


const navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar_links">
          <DarkMode></DarkMode>
        <a href="#popular">Popular<img src={image.fire} alt="fire emoji" className='navbar_emoji'/></a>
        <a href="#top_rated">Top Rated<img src={image.star} alt="star emoji" className='navbar_emoji'/></a>
        <a href="#upcoming">Upcoming<img src={image.party} alt="party emoji" className='navbar_emoji'/></a>
        </div>
    </nav>
  )
}

export default navbar
