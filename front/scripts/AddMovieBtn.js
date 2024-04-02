
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");
const genres = Array.from(document.querySelectorAll('input[name="genre"]')); // Convertir NodeList a Array


function clearInput() {
    // Limpiar los campos del formulario
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    rate.value = "";
    poster.value = "";

    // Desmarcar todos los géneros seleccionados
    genres.forEach(genre => {
        genre.checked = false;
    });
}
