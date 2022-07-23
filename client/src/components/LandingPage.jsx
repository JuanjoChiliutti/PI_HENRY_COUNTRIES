import React from 'react'
import imagen from '../../src/mundo-landing.jpg'
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landing'>
        <h1>HENRY - PI Countries - Juan Jose Chiliutti</h1>
        <div className='imagenmundo'>
            <img className='imagenmundo' src={imagen} alt="landing" />
        </div>
        <div>
        <NavLink to='/Home' style={{textDecoration: 'none', color: 'black', fontWeight: 'bold' }} >
            Go to HomePage
        </NavLink>

        </div>
    </div>
  )
}

export default LandingPage