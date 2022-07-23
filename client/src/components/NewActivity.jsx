import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './NewActivity.css'
import { postActivity, getActivities, getCountries } from '../redux/actions'

function validate(activity) {
    let errors = {}
    if (!activity.name) {
        errors.name = 'Activity Name is required'
    } else if (/^[A-Za-z]+$/.test(activity.name) === false) {
        errors.name = 'Name must be a string'
    }

    if (!activity.duration){
        errors.duration = 'Duration is required'
    } else if(activity.duration < 1 || activity.duration > 365) {
        errors.duration = 'Duration must be between 1 and 365'
    }

    if (!activity.difficulty) {
        errors.difficulty = 'Difficulty is required'
    }
    if (!activity.season) {
        errors.season = 'Season is required'
    }
    
    return errors
}




function NewActivity() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const [activity, setActivity] = useState({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
    })
    const [countrySelect, setCountrySelect] = useState([])
    const [errors, setErrors] = useState({})
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])
    useEffect(() => {
        dispatch (getCountries())
    }, [dispatch])
    function handleOnChange(e) {
        e.preventDefault()
        setActivity({ ...activity, [e.target.name]: e.target.value })
        setErrors(validate({
            ...activity, 
            [e.target.name]: e.target.value
        }))
    }
    
    function handleCountryOnChange(e) {
        e.preventDefault()
        
        if(Object.values(countrySelect).includes(e.target.value)) {
            alert('Country already selected')
        } else {
            setCountrySelect([...countrySelect, e.target.value])
        }
    }
    
    function onClose (id) {
        setCountrySelect(oldCountries => oldCountries.filter(c => c !== id))
    }
    
    function handleOnSubmit(e) {
        e.preventDefault()
        if(Object.keys(errors).length === 0 && countrySelect.length > 0) {
        dispatch(postActivity(activity, countrySelect))
        alert('Activity added')
        } else {
            alert('Please fill all fields correctly')
        }
    }




    return (
        <div className='countryVs'>
            <div className='createbar'>

                <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >
                    Back to Home
                </NavLink>
            </div>
            <div className='newactivity'>

                <h1>Create new Activity</h1>
                <form onSubmit={handleOnSubmit}>
                    <label>Activity Name </label>
                    <input name='name' onChange={handleOnChange} type='text' />
                    {errors.name && <p>{errors.name}</p>}
                    <br />
                    <select name='difficulty' onChange={handleOnChange}>
                        <option >Difficulty</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                    </select>
                    {errors.difficulty && <p>{errors.difficulty}</p>}

                    <br />
                    <label>Duration </label>
                    <input name='duration' type= 'number' onChange={handleOnChange} placeholder='between 1 and 365' />
                    <label > Days</label>
                    {errors.duration && <p>{errors.duration}</p>}
                    <br />
                    <select className='season' name='season' onChange={handleOnChange} id="">
                        <option>Season</option>
                        <option value={'summer'}>Summer</option>
                        <option value={'winter'}>Winter</option>
                        <option value={'spring'}>Spring</option>
                        <option value={'autumn'}>Autumn</option>
                    </select>
                    {errors.season && <p>{errors.season}</p>}
                    <br />
                    <select name="countries" onChange={handleCountryOnChange} >
                        <option value="">Country</option>
                        {countries && countries.map(country => (<option key={country.id} value={country.id}>{country.name}</option>))}
                    </select>
                        
                    <br />
                    <div>
                        <h4>Countries: </h4>
                        <ul className='mapeo'>

                            {countrySelect.map(country => {let imgCountry = countries?.find(c => c.id === country) 
                                return (<div className='countryActivity' key={country}>
                                    <img src={imgCountry.flag} alt={imgCountry.name}  style={{height: '5vh', borderRadius: '100%'}}/>
                                    <button onClick={()=>onClose(country)}>X</button>
                                    </div>)})
                            }

                        </ul>

                    </div>
                    <button className='btncreate' type='submit' >Create</button> 
                    
                </form>
            </div>
        </div>
    )
}

export default NewActivity