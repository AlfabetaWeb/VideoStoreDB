
const express = require('express'); //agregas express a la variable

const app = express();  //para ejecutar express

const port = 3000;  // puerto local

const db = require('./db/db');  //me traigo la base de datos


//Middlewares

app.use(express.json());   //te permite trabajar con json en este backend




//Conexión a base de datos y levantar servidor