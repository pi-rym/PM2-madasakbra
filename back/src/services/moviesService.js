require("dotenv").config();
const { BASE_URL } = process.env;

const axios = require("axios");

const { Movies } = require("../types/class")

module.exports = {
  getAllMovies: async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      const movies = data.map(movie => new Movies(movie))
      return  movies;
    } catch (error) {
      throw new Error(error);
    }
  },
};
