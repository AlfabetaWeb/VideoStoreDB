
const express = require('express'); //agregas express a la variable

const app = express();  //para ejecutar express

const port = 3000;  // puerto local

const db = require('./db/db');  //me traigo la base de datos


//Middlewares


//Conexión a base de datos y levantar servidor