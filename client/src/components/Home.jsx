import React from 'react'
import './Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries} from '../redux/actions'
import NavBar from './NavBar'
import CountryContainer from './CountryContainer'



export default function Home() {
    const dispatch = useDispatch()
    const {countries} = useSelector(state => state)
    const isFilter = useSelector(state => state.isFilter)
    useEffect(() => {
        if (isFilter) {
            dispatch(getCountries())
        }
    }, [dispatch, isFilter])



    return (
        <div className='navBar'>
            <div>
                <NavBar />
            </div>
            <CountryContainer countries={countries} />
        </div>
    )
}
