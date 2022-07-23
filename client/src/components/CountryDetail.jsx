import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCountryDetail, resetDetail, setPage } from '../redux/actions'
import './CountryDetail.css'
import {NavLink} from 'react-router-dom'

function CountryDetail() {
  let { countryId } = useParams()
  const dispatch = useDispatch()
  const {countryDetail, currentPage} = useSelector(state => state)
  useEffect(() => {
    dispatch(getCountryDetail(countryId))
    return () => {
      dispatch(resetDetail())
      dispatch(setPage(1))
    }
  }, [dispatch, countryId])
 


  return (
    <div className='countryVs'>
        <div className='createbar'>

        <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >
            Back to Home
        </NavLink>
      </div>
      <img src={countryDetail.flag} alt={countryDetail.name} />
      <div className='name'>{countryDetail.name}</div>
      <div>ID: {countryDetail.id}</div>
      {countryDetail.capital && <div>Capital: {countryDetail.capital}</div>}
      <div>Population: {countryDetail.population}</div>
      {countryDetail.region && <div>Region: {countryDetail.region}</div>}
      <div>Subregion: {countryDetail.subregion}</div>
      <div>Area: {countryDetail.area} Km2</div>
      <div>
        {countryDetail.Activities && countryDetail.Activities.length ? countryDetail.Activities.map(activity => {
          return <div key={activity.id}>
            <h2>Activities</h2>
            <h5>Name: {activity.name} </h5>
            <h5>Duration: {activity.duration} </h5>
            <h5>Difficulty: {activity.difficulty} </h5>
            <h5>Season: {activity.season} </h5>
          </div>
        })
          :
          <div>
            <h2>No Activities</h2>


          </div>

        }
      </div>
    </div>
  )
}


export default CountryDetail