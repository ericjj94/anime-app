const animeList = require('../controllers/anime/animeList');

const appRouter = app => {
    // add more routes here
    app.get('/services/getAnimes',animeList);
}
module.exports = appRouter;
