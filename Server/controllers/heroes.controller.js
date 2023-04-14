'use strict';
const heroesModel = require('../models/heroes.models');

// Controller function for getting a hero by ID
async function getHeroById(req, res) {
const id = req.params.id;
try {
const tick = await heroesModel.getHeroById(id);
if (tick) {
res.json(tick);
} else {
res.status(404).json({ message: 'Hero not found' });
}
} catch (error) {
console.log(error);
res.status(500).json({ message: 'Internal server error' });
}
}

module.exports = {
getHeroById,
};