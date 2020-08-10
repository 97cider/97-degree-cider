'use strict';

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.DEV_PORT;

app.use(bodyParser.json());
app.use(express.urlencoded( { extended: true } ));

app.get('/', (req, res) => {
    console.log("Poggers you got an API request");
});

app.listen(port);