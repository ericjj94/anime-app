const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// this function accepts a database name and returns the same if available

const getDbConfig = async function(databaseName) {
console.log("databaseName", databaseName)
    const dbConfig = await mongo.connect(url);
    if(!databaseName){
        console.log('No DatabaseName provided....');
        return null;
    }
    const database = dbConfig.db(databaseName);
    return database;
}
module.exports = getDbConfig;