

  const cardContainer = document.getElementById("cardContainer");

const renderCards = (data) => {
  data.forEach((item, index) => {
    const card = document.createElement("div"); // creamos el elemento div que almacenara las peliculas
    card.classList.add("card-body"); // asignamos la clase al nuevo div

    card.innerHTML = `
<a href="./preview.html"> <img  class="card-img-top" src="${item.poster}" alt="${item.title}" "></a>
       
        
      `;

    cardContainer.appendChild(card); //insertamos en el div padre
  });
};

module.exports = renderCards;