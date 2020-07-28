
const Watched = require('../../Models/watched');

const itemsPerPage = 10;

const animeList = async (req,res) => {
    const currentPage = req.query && req.query.currentPage;
    const skip = (currentPage - 1)* itemsPerPage;
    let watchedAnimeList = await Watched.find({}).skip(skip).limit(itemsPerPage);
    res.send({code: 200, data: watchedAnimeList })
} 
module.exports = animeList;
