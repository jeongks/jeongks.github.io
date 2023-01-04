const express = require("express");
const env = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("express works!");
})

app.get('/login');

const server = app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})