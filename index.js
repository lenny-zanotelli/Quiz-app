require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const path = require('path');
const session = require('express-session');
const userMiddleware = require('./app/middleware/user');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended:true}));

// Initialisation de la session si pas encore fait
app.use(session({
    secret: "Guess It!", // génération des tokens
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (100*60*60) // 1 heure
    }
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './assets')));

app.use(userMiddleware);

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Currently listening on http://localhost:${PORT}`);
})