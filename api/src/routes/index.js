const { Router } = require("express");
const characters = require('./characters.js')
const epispode = require('./episode')

const router = Router();

router.use('/', characters)
router.use('/', epispode)

// Configurar los routers

module.exports = router;
