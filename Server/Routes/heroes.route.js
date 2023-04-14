'use strict';
const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroes.controller');

// Routes for getting heroes
router.get('/getheroes/:id', heroesController.getHeroById);

module.exports = router;