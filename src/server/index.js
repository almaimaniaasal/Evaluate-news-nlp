var path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js');

//Dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: fetch } = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

//The Object to hold my data
//let apiData = {};

//Get route
app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
    console.log('Example app listening on port 8081!');
    console.log(`Your API key is ${process.env.appKey}`);
});

// app.get('/test', function(req, res) {
//     res.send(mockAPIResponse);
// });

//API credentials
const textApi = process.env.appKey;
const url = `https://api.meaningcloud.com/sentiment-2.1?key=${textApi}&of=json&lang=en&model=general&url=`;

//Post route
app.post('/text', async(req, res) => {
    let userUrl = req.body.text;
    let data = await getData(url + userUrl);

    try {
        const newData = res.json({
            userUrl: userUrl,
            apiData: data
        });
        return newData;
    } catch (error) {
        console.log("error", error);
    }
});

const getData = async(url) => {

    const req = await fetch(url);

    try {
        const newData = await req.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};