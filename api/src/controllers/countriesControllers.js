const {Countries} = require('../db');
const axios = require('axios');


async function getCountries () {
    try {
        let allCountries= (await axios('https://restcountries.com/v3/all')).data.
            map((country) => {
                Countries.create({
                    id: country.cca3,
                    name: country.name.common? country.name.common : 'Dont have name',
                    flag: country.flags[1]? country.flags[1] : 'Dont have flag',
                    continent: country.continents[0]? country.continents[0] : 'Dont have continent',
                    capital: Array.isArray(country.capital)? country.capital[0] : 'Dont have capital' ,
                    subregion: country.subregion? country.subregion : 'Dont have subregion',
                    area: parseInt(country.area)? parseInt(country.area) : 0,
                    population: country.population? parseInt(country.population) : 0,
                })
            })
            console.log("Todos los paises se han cargado correctamente")
        } catch (e) {
            console.log(e);
    }
}    
    




module.exports = {
    getCountries
}

