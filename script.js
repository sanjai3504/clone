const API_KEY = "877765c38b77846422733354d9202c6e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

// Fetch trending movies
async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  const movies = data.results;

  displayMovies(movies);
  if (movies.length > 0) {
    setBanner(movies[0]); // Set the first movie as banner
  }
}

function displayMovies(movies) {
  const row = document.getElementById("movie-row");
  row.innerHTML = "";

  movies.forEach((movie) => {
    if (!movie.poster_path) return;

    const link = document.createElement("a");
    link.href = `player.html?title=${encodeURIComponent(movie.title)}`;

    const img = document.createElement("img");
    img.src = `${IMG_URL}${movie.poster_path}`;
    img.classList.add("row__poster");
    img.alt = movie.title;

    // Save to localStorage on click
    link.addEventListener("click", () => {
      localStorage.setItem("selectedMovie", JSON.stringify({
        title: movie.title,
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // You can customize this
      }));
    });

    link.appendChild(img);
    row.appendChild(link);
  });
}

function setBanner(movie) {
  const banner = document.getElementById("banner");
  if (movie.backdrop_path) {
    banner.style.backgroundImage = `url(${IMG_URL}${movie.backdrop_path})`;
  }
}

// Call the API
getTrendingMovies();
