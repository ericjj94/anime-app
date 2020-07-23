const mongoose = require("mongoose");

mongoose.Promise = Promise;
// Exit application on error
mongoose.connection.on("error", err => {
console.error(`MongoDB connection error: ${err}`);
process.exit(-1);
});

// print mongoose logs in dev env
// if (mongo.env === "development") {
// mongoose.set("debug", true);
// }

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
    mongoose.connect(process.env.URL, {
        useCreateIndex: true,
        keepAlive: 1,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    return mongoose.connection;
};