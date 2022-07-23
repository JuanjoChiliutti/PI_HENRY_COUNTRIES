import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCountry, getActivities, setCountries, getCountriesByActivities, getCountriesByContinent, setPage, getCountries } from '../redux/actions'




function NavBar() {
  const dispatch = useDispatch()
  const { activities, countries } = useSelector(state => state)

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({
    attribute: '',
    order: ''
  })
  const [continent, setContinent] = useState('')


  useEffect(() => {
    if (continent)
      dispatch(getCountriesByContinent(continent))
  }, [continent, dispatch])


  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  function handleOnChange(e) {
    setSearch(e.target.value)
    dispatch(setPage(1))
  }
  
  function handleOnSubmit(e) {
    e.preventDefault()
    dispatch(searchCountry(search))
    setSearch('')
  }
  function handleOnChangeContinent(e) {
    e.preventDefault()
    dispatch(setPage(1))
    setContinent(e.target.value)
  }
  function handleOnChangeActivities(e) {
    e.preventDefault()
    dispatch(setPage(1))
    if(e.target.value === 'Activities') {
      dispatch(getCountries())
    } else {
      let filteredCountries = activities.filter(activity => activity.id === e.target.value)
      dispatch(getCountriesByActivities(filteredCountries[0].Countries))
      
    }
  }
  

  function handleOnChangeSort(e) {
    e.preventDefault()
    setSort({ ...sort, [e.target.name]: e.target.value })
  }

  function handleOnSubmitSort(e) {
    e.preventDefault()
    if (sort.attribute === 'name' && sort.order === 'ascending') {
      let ordCountry = countries.sort((a, b) => (a.name > b.name) ? 1 : -1)
      dispatch(setCountries(ordCountry))
    } else if (sort.attribute === 'name' && sort.order === 'descending') {
      dispatch(setCountries(countries.sort((a, b) => (a.name < b.name) ? 1 : -1)))
    } else if (sort.attribute === 'population' && sort.order === 'ascending') {
      let ordCountry = countries.sort((a, b) => (a.population > b.population) ? 1 : -1)
      dispatch(setCountries(ordCountry))
    } else if (sort.attribute === 'population' && sort.order === 'descending') {
      let ordCountry = countries.sort((a, b) => (a.population < b.population) ? 1 : -1)
      dispatch(setCountries(ordCountry))
    }

  }





  return (
    <div className='navbar'>
      <div className='linkhome'>
        <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >
          Back to Home
        </NavLink>
      </div>
      <div className='searchcountry'>
        <input className='inputsearch' onChange={handleOnChange} type="text" placeholder="Search Country" />

        {search ? <button className='btn' onClick={handleOnSubmit} >Search</button> : null}
      </div>
      <div>
        <NavLink to='/NewActivity' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
          Create new Activity
        </NavLink>
      </div>

      <div className='filterby'>

        Filter by:
        <select name='continent' onChange={handleOnChangeContinent}>
          <option>Continent</option>
          <option value={'all'}>All</option>
          <option value={'south'}>South America</option>
          <option value={'north'}>North America</option>
          <option value={'europe'}>Europe</option>
          <option value={'africa'}>Africa</option>
          <option value={'asia'}>Asia</option>
          <option value={'oceania'}>Oceania</option>
          <option value={'antarctica'}>Antarctica</option>
        </select>
        <select name='activities' onChange={handleOnChangeActivities}>
          <option >Activities</option>
          {activities && activities.map(act => (
            <option key={act.id} value={act.id}>{act.name}</option>))}
        </select>
      </div>
      <div className='sortby'>
        <form onSubmit={handleOnSubmitSort}>
          <select name="attribute" id="" onChange={handleOnChangeSort}>
            <option value=''>Select</option>
            <option value={'name'}>Name</option>
            <option value={'population'}>Population</option>
          </select>
          <select name="order" id="" onChange={handleOnChangeSort}>
            <option value="">Select</option>
            <option value={'ascending'}>Ascending</option>
            <option value={'descending'}>Descending</option>
          </select>
          <button type='submit'> Sort </button>
        </form>
      </div>

    </div>

  )
}

export default NavBar