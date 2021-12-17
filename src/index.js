const express = require('express');

const ejs = require('ejs');
const bodyparser = require('body-parser')

const registerStudentController = require('./controllers/registerStudent.controller')

const app = express();

app.use(express.json());


app.use(express.static("public")) // for adding js and css file

//set templating Enginge
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended : true}))

app.use('/register', registerStudentController);


module.exports = app;