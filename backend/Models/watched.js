const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchedSchema = new Schema({
    name: {type : String},
    description: {type : String},
    rating:{type: String},
    episode: { type: Number},
    category: { type: String},
    studio:  { type: String},
    img:  { type: String}
});
const watched = mongoose.model('watched', watchedSchema);
module.exports = watched;
