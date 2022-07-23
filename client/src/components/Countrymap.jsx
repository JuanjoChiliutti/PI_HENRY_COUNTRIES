import React from 'react'
import { NavLink } from 'react-router-dom'


function Countrymap({currentCountries}) {
  return (
    <div className='home'>
            {   
                currentCountries?.length > 0 &&
                currentCountries?.map(country => 
                    <NavLink style={{textDecoration: 'none', color: 'black'}} key = {country.id} to={`/countries/${country.id}`}>
                        <div className='countryCard' key = {country.id}> 
                            <h3>{country.name} </h3>
                            <p>Continent:  {country.continent}</p>
                            <img className='flag' src={country.flag} alt={country.name} />
                        </div>
                    </NavLink>
                )
            }

        </div>
  )
}

export default Countrymap