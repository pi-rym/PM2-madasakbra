const imgContainer = document.querySelector(".img-container");

function createImgDisplay(data) {
  data.forEach((item, index) => {
    /*
         <p>Director: ${item.director}</p>
         <p>Duration: ${item.duration}</p>
         <p>Genre: ${item.genre.join(", ")}</p>
         <p>Rate: ${item.rate}</p>
        `;
        */

    const imgDisplay = document.createElement("div"); // creamos el elemento div que almacenara las peliculas
    imgDisplay.classList.add("card-body"); // asignamos la clase al nuevo div

    imgDisplay.innerHTML = `
<a href="./preview.html"> <img  class="card-img-top" src="${item.poster}" alt="${item.title}" onclick="createPreview()"></a>
       
        
      `;

    imgContainer.appendChild(imgDisplay); //insertamos en el div padre
    //imgDisplay.appendChild(info)
  });
}

function createPreview() {
  
    const preview = document.createElement("div"); //creamos un div contenedor para el  preview
    preview.classList.add("container");

    preview.innerHTML = `
    <h1>--mmu--oHELLO THEREo--umm--</h1>

    `;

    previewContainer.appendChild(preview); //este es el nuevo contenedor donde veremos los datos de la pelicula 
}

$(document).ready(function () {
  $.get("https://students-api.2.us-1.fl0.io/movies", function (data) {
    createImgDisplay(data);
  });
});
