import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Countrymap from './Countrymap'
import Paginate from './Paginate'
import { setPage } from '../redux/actions'


function CountryContainer( {countries} ) {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
  
        
    const [countriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage -1 
    const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)
   
    const paginate = pageNumber => dispatch(setPage(pageNumber))
  return (
    <div>
        <Paginate countries={countries} countriesPerPage={countriesPerPage} paginate={paginate} />
        <Countrymap currentCountries={currentCountries} />
    </div>
  )
}

export default CountryContainer