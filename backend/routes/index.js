const { getAnimeList, getAnimeDetails } = require('../controllers/anime/animeList');

const appRouter = app => {
    // add more routes here
    app.get('/services/animes',getAnimeList);
    app.get('/services/anime', getAnimeDetails)
}
module.exports = appRouter;
