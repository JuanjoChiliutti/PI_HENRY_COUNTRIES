const {Router}  = require('express');
const cors = require('cors');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.use(cors())

const countryRouter = require('./country.js');
const activityRouter = require('./activity.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter);
router.use('/activities', activityRouter);


module.exports = router;
