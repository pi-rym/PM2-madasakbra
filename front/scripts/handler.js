const axios = require("axios");
const renderCards = require("./renderCards");



const getFilms = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/movies"
    );
    console.log(data);
    renderCards(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getFilms;
