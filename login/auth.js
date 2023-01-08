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
var comparePasword = function(password, hash, callback){
    bcrypt.compare(password, hash, function(err, isMatch){
        return err == null ? callback(null, isMatch) : callback(null);
    })
}

var authenticationCompleted = function(req, res, user, next){
    const secret = req.app.get('jwt-secret');
    const cd = config.cookieDomain;
    const cookieHttpOnly = { maxAge:100000000000, httpOnly: true };
    const cookieNormal = { maxAge:100000000000, httpOnly: false};

    if(cd != '*'){
        cookieHttpOnly['domain'] = config.cookieDomain;
        cookieNormal['domain'] = config.cookieDomain;
    }

    delete user.password;
    
    jwt.sign(user, secret, {
        expiresIn: '1d',
        issuer: cd,
        subject: 'userInfo'
    },(err,token)=>{
        if(err) res.json({r:false, msg: '토큰 생성에 실패하였습니다.'});
        res.cookie('token', token, cookieNormal);
        req.token = token;
        req.user = user;
        next();
    });
};

var isAuthenticated = function(req, res, next){
    const token = req.header['access-token'] || req.query.token || req.cookies.token;
    if(token == null) next();
    else jwt.verify(token, req.app.get('jwt-token'),(err,decoded)=>{
        if(err){
            next();
        }
        req.user = decoded;
        delete req.user.password;
        next();
    })
};

module.exports.cryptPassword = cryptPassword;
module.exports.comparePasword = comparePasword;
module.exports.isAuthenticated = isAuthenticated;


module.exports.init = async function(app){
    const db = await require('../db/db').connection;

    app.use(cookieSession({
        keys:['auth'],
        cookie:{
            path: '/', httpOnly: true,
            maxAge: 1000*60*60*24*30 //유효기간: 한달
        }
    }));

    app.set('jwt-secret',"random18293string5142fe3d");

    var authenticate = async function(req, res, next){
        const user_id = req.query.id || req.body.id;
        const password = req.query.passowrd || req.body.paasword;
        if(user_id === 'test' && password ==='test'){
            console.log(user_id + ' / '+password);
            authenticationCompleted(req, res,
                {member_no: '111111111', user_id: 'test', name:'test'}, next);
        }
        else {
            if(user_id){
                var memberProjection = {projection: { _id:false, name:true, member_no: true, user_id:true, password:true}};
                db.collection('member').findOne({user_id:user_id},memberProjection, (err, member)=>{
                    if(member != null) authenticationCompleted(req, res,member, next);
                    else res.json({r:false, msg:'The user does not exist'});
                });
            } else {
                res.json({r:false, msg:'user_id is not valid'});
            }
        }
    }

    module.exports.authenticate = authenticate;
};

