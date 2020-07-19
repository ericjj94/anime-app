const database = require('../../mongoConfig/db-config');
const data =  require('../../routes/animeListSample');
const itemsPerPage = 10;

// const animeList =  {
//     getList: (req,res) => {
//         const db = await database('anime');
//     const data = await db.collection('watched').findOne({id:1});
//     console.log("animeList -> db",data);
//     }
// }
// module.exports = animeList;



const animeList = async (req,res) => {
    // const db = await database('anime');
    // const animeList = await db.collection('watched').findOne({id:1});
    // console.log("animeList -> db",data);
    const currentPage = req.query && req.query.currentPage;
        const skip = (currentPage -1) * itemsPerPage;
        // move the data to a database
        const limit = (itemsPerPage + skip) < data.length ?  (itemsPerPage + skip) : data.length;
        const animeList = data.slice(skip,limit);
        res.send({code: 200, data: animeList })
    // console.log('data',data);
} 
module.exports = animeList;
