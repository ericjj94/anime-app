const mongo = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// // this function accepts a database name and returns the same if available
// const getDbConfig = async function(databaseName) {
//     const dbConfig = await mongo.connect(url);
//     if(!databaseName){
//         console.log('No Database Name provided....');
//         return null;
//     }
//     const database = dbConfig.db(databaseName);
//     return database;
// }
// module.exports = getDbConfig;


// 

const db  = async function() {
	console.log('process.env.url',process.env.URL);
	// const dbConfig = await mongo.connect(process.env.URL);
	// db = dbConfig.db('anime');
	// console.log('asd',await db.collection('watched').findOne({id:1}));
};
module.exports = db;