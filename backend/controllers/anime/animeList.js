
const Watched = require('../../Models/watched');
const data =  require('../../routes/animeListSample');

const itemsPerPage = 10;
const animeList = async (req,res) => {

     // to add a new entry initialize a constructor on the schema
    // const saveToDb = new Watched({
    //     "name": "One Piece",
    //     "description": "Gol D. Roger was known as the 'Pirate King',the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
    //     "rating": "8.54",
    //     "episode": 700,
    //     "category": "Animation | Drama | Adventure",
    //     "studio": "Toei Animation",
    //     "img": "https://cdn.myanimelist.net/images/anime/2/79900.jpg"
    //   });
    //   const result = await saveToDb.save();
    //   console.log("animeList -> result", result);
    // let data1 = await Watched.find();
    const currentPage = req.query && req.query.currentPage;
    const skip = (currentPage -1) * itemsPerPage;
    // move the data to a database
    const limit = (itemsPerPage + skip) < data.length ?  (itemsPerPage + skip) : data.length;
    const animeList = data.slice(skip,limit);
    res.send({code: 200, data: animeList })
} 
module.exports = animeList;
