const axios = require("axios");
const renderCards = require("./renderCards");
/*
const getFilms = ()=>{
axios.get("https://students-api.up.railway.app/movies")
.then(response => {
    renderCards(response.data)
})
.catch((error)=>console.log(error.message))
}

module.exports = getFilms;
*/


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
