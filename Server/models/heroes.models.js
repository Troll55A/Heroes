'use strict';
const mysql = require('mysql2/promise');

// Model function for getting a hero by ID
async function getHeroById(id) {
try {
// Connect to the MySQL database
const connection = await mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'heroes',
});
const [rows, fields] = await connection.execute(`SELECT * FROM heroes WHERE idheroes = ${id}`);

// Close the database connection
await connection.end();

// Return the found hero
        return rows.length > 0 ? rows[0] : null;
} catch (error) {
console.log(error);
throw error;
}
}

module.exports = {
getHeroById,
};