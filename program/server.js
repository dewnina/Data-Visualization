const express = require('express');
const ejs = require("ejs");
var path = require('path');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/mainpage', (req, res) => {
    res.render('mainpage');
});

app.get('/dash1', (req, res) => {
    res.render('dash1');
});

app.get('/dash2', (req, res) => {
    res.render('dash2');
});

app.get('/dash3', (req, res) => {
    res.render('dash3');
});
app.get('/summary', (req, res) => {
    res.render('summary');
});


app.listen(3000, function () {
    console.log('server started on port 3000');
});