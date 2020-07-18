const data = require('./animeListSample.js');

const itemsPerPage = 10;
const appRouter = (app)=> {

    app.get('/services/getAnimes',(req,res)=> {
        const currentPage = req.query && req.query.currentPage;
        const skip = (currentPage -1) * itemsPerPage;
        // move the data to a database
        const limit = (itemsPerPage + skip) < data.length ?  (itemsPerPage + skip) : data.length;
        const animeList = data.slice(skip,limit);
         res.send({code: 200, data: animeList })
    });

}
module.exports = appRouter;
