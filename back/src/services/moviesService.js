
const { Movies } = require("../types/class")


const Movie = require("../models/Movie")

module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
    
      return  movies;
    } catch (error) {
      throw new Error(error);
    }
  },
};
