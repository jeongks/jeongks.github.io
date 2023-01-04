const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

//This is generate salt and hash function to crypt the password and return callback function so that the errors in the process can be handled in other functions
//where require crypting password
var cryptPassword = function (password, callback){
    bcrypt.genSalt(10, function(err, salt){
        if (err) return callback(err);

        bcrypt.hash(password,salt, function(err, hash){
            return callback(err,hash);
        })
    })
}


//compare password and hashed password to see if the authentication attemp is valid. 
// if there is no error it will return the callback with result of matching password and hashed password
// it there is error it will return error with callback so that the functions where requires password comparison will be handled.
var comparePasword = function (password, hash, callback){
    bcrypt.compare(password, hash, function(err, isMatch){
        return err == null ? callback(null, isMatch) : callback(null);
    })
}

