const movieService = require("../services/moviesService");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMovie: async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    try {
      const newMovie = await movieService.createMovies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(200).json({message: "Movie added correctly"});
    } catch (error) {
      res.status(500).json({ error: "Error al crear la película" });
    }
  },
};
