const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

require('dotenv').config(); // loads the env variables

// create express app
const app = express();

// store port from env variable
const port = process.env.PORT || 5000;

// allows requests from different origins
app.use(cors());
// parses incoming json data in req body
app.use(bodyParser.json())

// start the server
app.listen(port, () => {
    // call function that connects mongodb database to server
    connectDB();
    console.log(`server is running at http://localhost:${port}`)
})