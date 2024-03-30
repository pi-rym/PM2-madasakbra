const axios = require("axios");

function clearInput() {
  const title = document.getElementById("title");
  const year = document.getElementById("year");
  const director = document.getElementById("director");
  const duration = document.getElementById("duration");
  const rate = document.getElementById("rate");
  const poster = document.getElementById("poster");
  const genres = document.querySelectorAll('input[name="genre"]');

  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  genres.forEach((genre) => (genre.checked = false));

  
}

const btnClear = document.getElementById("btnClear");
  btnClear.addEventListener("click", clearInput);
