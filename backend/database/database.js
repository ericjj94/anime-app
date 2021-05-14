const mongoose = require("mongoose");

mongoose.Promise = Promise;
// Exit application on error
mongoose.connection.on("error", (err) => {
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
  // check why the process.env is not working, should be process.env.MONGO_DB_URL from env file
  mongoose.connect("mongodb://localhost:27017/anime", {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  return mongoose.connection;
};
