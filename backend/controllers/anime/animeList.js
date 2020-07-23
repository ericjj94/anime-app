
const Watched = require('../../Models/watched');

const itemsPerPage = 10;

const animeList = async (req,res) => {
    // TODO: modify the pagintion in db. that would be faster
    let data1 = await Watched.find();
    const currentPage = req.query && req.query.currentPage;
    const skip = (currentPage -1) * itemsPerPage;
    const limit = (itemsPerPage + skip) < data1.length ?  (itemsPerPage + skip) : data1.length;
    const animeList = data1.slice(skip,limit);
    res.send({code: 200, data: animeList })
} 
module.exports = animeList;
