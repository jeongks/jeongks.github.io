const MongoClient = require('mongodb').MongoClient;
const config = require('../config.js');

function connect(url) {
    return MongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => client.db())
}

exports.uri = config["db_url"];
exports.connection = (async function (){
    try{
        let databases = await Promise.all([connect(config["db_url"])]);
        console.log("Connected to Mongodb!");
        return databases[0];
    } catch(err){
        console.error("Failed to connect to mongodb");
        console.error(err);
        throw err;
    }
})();