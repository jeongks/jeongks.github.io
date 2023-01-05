const express = require("express");
const env = require('dotenv');
const route = require("./route");

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("express works!");
})

await route(app);

const server = app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})