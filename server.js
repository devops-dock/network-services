const express = require('express');
const cors = require('cors');
const config = require('./config');
const ip = require('ip');
const mongoose = require('mongoose');
const PORT = config.server.port;

const app = express();

// mongoose connect
const mongoUrl = config.database.mongoUrl;
const db = mongoose.connect(mongoUrl);

// cors middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
}));

// route handler
app.post('/cidr/calculate-cidr', (req, res) => {
    console.log(req.body);
    const result = ip.cidrSubnet(req.body.cidr);
    const payload = {
        cidr: req.body.cidr,
        result: result
    } 
    console.log(payload)
    return res.status(200).json(payload)
});


if(db) {
    app.listen(PORT, (err, client) => {
        if(err) console.log(err.message)
        console.log('server connected at PORT: ', PORT)
        console.log('MongoDB database is connected.')
    });
}