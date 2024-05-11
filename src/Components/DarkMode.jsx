import React from 'react'
import './DarkMode.css'

const DarkMode = () => {

    const setDarkTheme = () =>{
        document.querySelector("body").setAttribute("data-theme","dark")
        localStorage.setItem("selectedTheme","dark")
    }

    const setLightTheme = () =>{
        document.querySelector("body").setAttribute("data-theme","Light")
        localStorage.setItem("selectedTheme","Light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")
    const toggleTheme = e =>{
        if(e.target.checked){
            setDarkTheme()
        }else{
            setLightTheme()
        }
    }

    if(selectedTheme==="Light"){
        setLightTheme()
    }else{
        setDarkTheme()
    }

  return (
    <div className='body'>
      <input type="checkbox" id = "darkmode-toggle" onChange={toggleTheme} defaultChecked={selectedTheme!=="Light"}/>
      <label htmlFor="darkmode-toggle">
        <img className = "sun" src="https://www.svgrepo.com/show/78390/sun.svg" alt="" />
        <img className = "moon" src="https://www.svgrepo.com/show/79251/crescent-moon.svg" alt="" />
      </label>
    </div>
  )
}

export default DarkMode
