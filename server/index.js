'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const redis = require("redis");
const { promisify } = require("util");

require('dotenv').config();

const app = express();
const port = process.env.port;

// const client = redis.createClient();
// const getAsync = promisify(client.get).bind(client);

app.use(bodyParser.json());
app.use(express.urlencoded( { extended: true } ));

if (process.env.NODE_ENV === 'development') {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
}

app.get('/', (req, res) => {
    console.log("Poggers you got an API request");
});

app.get('/test', (req, res) => {
    console.log("Got a request from the vue app! nice!");
    res.send("Welcome to 97 Degree Cider!");
});

app.listen(port);