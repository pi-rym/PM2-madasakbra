// Obtener el contenedor donde se mostrarán las tarjetas de películas
const cardContainer = document.getElementById("cardContainer");

// Función para renderizar las tarjetas de películas
const renderCards = (data) => {
  // Iterar sobre cada película en el array de datos
  data.forEach((item, index) => {
    // Crear un nuevo elemento div que representará la tarjeta de la película
    const card = document.createElement("div");
    // Asignar la clase "card-body" al elemento div para darle estilo
    card.classList.add("card-body");

    // Establecer el contenido HTML de la tarjeta
    card.innerHTML = `
      <img class="card-img-top" src="${item.poster}" alt="${item.title}" ">
      <p>${item.title}</p>
    `;

    // Agregar la tarjeta al contenedor de tarjetas en el DOM
    cardContainer.appendChild(card);
  });
};

// Exportar la función renderCards para ser utilizada en otros módulos
module.exports = renderCards;
