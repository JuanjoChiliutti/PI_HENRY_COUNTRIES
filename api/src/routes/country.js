const express = require('express');
const router = express.Router();
const { Countries, Activities} = require('../db');
const {Op} = require('sequelize');


router.get('/', async (req, res) => {
    const { country, continent} = req.query
    
    if (country) {
        const countries = await Countries.findAll({
            where: {
                name: {                
                    [Op.iLike]: `%${country}%`
                }
            },
            include: { model: Activities,
            attributes: ['id', 'name', 'duration', 'season', 'difficulty'] }
        })
        return countries.length !== 0 ? res.json({countries}) : res.status(404).json({message: 'No countries found'})
        
    }
    if (continent && continent !== 'all') {
        const countries = await Countries.findAll({
            where: {
                continent: {
                    [Op.iLike]: `%${continent}%`
                }
            },
            include: { model: Activities,
            attributes: ['id', 'name', 'duration', 'season', 'difficulty'] }
        })

        return countries? res.json({countries}) : res.status(404).json({message: 'No countries found'})
} 
    else {
        try {
        const countries = await Countries.findAll();
        res.json({countries});
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
    }
});

router.get('/:countryId', async (req, res) => {
    const { countryId } = req.params;
    try {
        const country = await Countries.findByPk(countryId.toUpperCase(), {include: { model: Activities }});
        return res.json({country})
    } catch (e) {
        console.log(e);
        res.send({message:'The country does not exist'})
        res.sendStatus(500);
    }
});




module.exports = router;