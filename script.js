// Función para cargar y mostrar la lista de películas
async function loadMovies() {
    try {
        const response = await fetch('movies.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const movies = await response.json();

        const movieList = document.getElementById('movie-list');

        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = `${movie.title} (${movie.year}) - Director: ${movie.director}`;
            listItem.addEventListener('click', () => showMovieDetails(movie));
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para mostrar los detalles de una película seleccionada
function showMovieDetails(movie) {
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Año: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Duración: ${movie.duration}</p>
        <p>Género:  ${movie.genre}</p>
        <p>Raiting: ${movie.rate}</p>
        <!-- Agrega más detalles de la película según sea necesario --> 
    `;
}
  

// Llamar a la función para cargar y mostrar la lista de películas cuando se cargue el contenido de la página
document.addEventListener('DOMContentLoaded', loadMovies);
