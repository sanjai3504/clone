const movie = JSON.parse(localStorage.getItem('selectedMovie'));

if (movie) {
  document.getElementById('movie-title').innerText = movie.title;
  document.getElementById('video-frame').src = movie.videoUrl + "?autoplay=1&mute=1";
} else {
  document.body.innerHTML = '<h2 style="color:white; text-align:center;">No movie selected.</h2>';
}
