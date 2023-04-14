const express = require ('express');
const bodyParser = require('body-parser'); //ayuda con post get
const api = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

api.use(cors());
api.options('*',cors())
api.use(bodyParser.json({ limit: '50mb' }));
api.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
console.log("api")

const heroes = require ('./Server/Routes/heroes.route');
api.use('/heroes', heroes)

api.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});
  

module.exports = api;

