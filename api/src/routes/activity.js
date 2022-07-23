const express = require('express');
const router = express.Router();
const { Activities, Countries} = require('../db');


router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countryId } = req.body;
    try {
        let act = await Activities.create({
            name,
            difficulty,
            duration,
            season,
        });
        countryId.forEach(async element => {
            const found = await Countries.findByPk(element);
            act?.addCountry([found]);
        });
        res.status(201).send(act);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.get('/', async (req, res) => {
    try {
        const activities = await Activities.findAll({include: { model: Countries }});
        res.json({activities});
            
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;