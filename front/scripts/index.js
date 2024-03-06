const imgContainer = document.querySelector(".img-container");

function createImgDisplay(data) {
  data.forEach((item, index) => {
    const info = document.createElement("div");
    info.classList.add("movie-data");
    info.innerHTML = `
         <h3>${item.title}</h3>
         <p>Year: ${item.year}</p>
         <p>Director: ${item.director}</p>
         <p>Duration: ${item.duration}</p>
         <p>Genre: ${item.genre.join(", ")}</p>
         <p>Rate: ${item.rate}</p>
        `;


    const imgDisplay = document.createElement("div"); // creamos el elemento div que almacenara las peliculas
    imgDisplay.classList.add("img-display"); // asignamos la clase al nuevo div

    imgDisplay.innerHTML = `
        <img src="${item.poster}" alt="${item.title}">
      `;


    imgContainer.appendChild(imgDisplay); //insertamos en el div padre
    imgDisplay.appendChild(info)
    
  });
}

$(document).ready(function () {
  $.get("https://students-api.2.us-1.fl0.io/movies", function (data) {
    createImgDisplay(data);
  });
});
