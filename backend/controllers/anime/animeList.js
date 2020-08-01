
const Watched = require('../../Models/watched');

const getAnimeList = async (req,res) => {
    const itemsPerPage = 10;
    const currentPage = req.query && req.query.currentPage;
    const fieldsToBeReturned = {name:1,_id:1,description:1,img:1};
    const skip = (currentPage - 1)* itemsPerPage;
    const watchedAnimeList = await Watched.find({},fieldsToBeReturned).skip(skip).limit(itemsPerPage);
    res.send({code: 200, data: watchedAnimeList })
} 

const getAnimeDetails = async (req,res) => {
    const id = req.query && req.query.id;
    const selectedAnime = await Watched.find({_id: id});
    res.send({code: 200, data: selectedAnime && selectedAnime[0]});
}

module.exports = { getAnimeList, getAnimeDetails};
