const express = require('express');
const charactercontroller = require('../controllers/charactercontroller');
const itemcontroller = require('../controllers/charactercontroller');
const router = express.Router;

router.get('/', charactercontroller.findAllCharacters);
router.get('/find/:id', charactercontroller.findCharacter);

module.exports = router;