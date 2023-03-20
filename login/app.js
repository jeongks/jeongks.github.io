const express = require("express");
const env = require('dotenv');
const route = require("./route");
const ejs = require("ejs");


const port = process.env.PORT || 3000;

module.exports = (async function(){
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true, limit:'10mb'}));
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res)=>{
        res.sendFile(__dirname+'/login.html');
    })

    app.post('/',(req, res)=>{
        res.send("username: "+req.body.username+", password: "+req.body.password);
        // console.log(req);
    })
    
    return app;
})();
