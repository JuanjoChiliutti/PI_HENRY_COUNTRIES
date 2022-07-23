import axios from 'axios';

function getCountries() {
    return async function (dispatch) {
        await axios.get('http://localhost:3001/countries')
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRIES',
                    payload: response.data.countries,
                    filter: false
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}
function getCountryDetail(countryId) {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/countries/${countryId}`)
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRY_DETAIL',
                    payload: response.data.country
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}

function searchCountry(countryName) {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/countries?country=${countryName}`)
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRIES',
                    payload: response.data.countries
                })
            })
            .catch(error => {
                alert('Country not found');
                console.log(error);
            });
    }
}

function getActivities() {
    return async function (dispatch) {
        await axios.get('http://localhost:3001/activities')
            .then(response => {
                dispatch({
                    type: 'GET_ACTIVITIES',
                    payload: response.data.activities
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}

function getCountriesByContinent(continent) {
    return async function (dispatch) {
        await axios.get(`http://localhost:3001/countries?continent=${continent}`)
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRIES_BY_CONTINENT',
                    payload: response.data.countries
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}



function getCountriesByActivities(payload) {
    return {
        type: 'GET_COUNTRIES_BY_ACTIVITIES',
        payload
    }
}

function postActivity(act, countryId) {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/activities', {...act, countryId})
            .then(response => {
                dispatch({
                    type: 'POST_ACTIVITY',
                    payload: response.data.activities
                })
            })
            .catch(error => {
                console.log(error);
            }); 
    }
}

function setPage(payload) {
    return {
        type: 'SET_PAGE',
        payload
    }
}

function setCountries(payload) {
    return {
        type: 'SET_COUNTRIES',
        payload
    }
}

function resetDetail() {
    return {
        type: 'RESET_DETAIL'
    }
}

export { setCountries, getCountries, postActivity, getCountryDetail, searchCountry, getActivities, getCountriesByContinent, setPage, getCountriesByActivities, resetDetail };

