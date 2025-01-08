document.addEventListener('DOMContentLoaded', function() {
    const movies = {
        "sacramento": {
            title: "Sacramento",
            year: "2025",
            poster: "posters/sacramento.jpg",
            description: "TBA",
            director: "Director Name",
            releaseDate: "Release Date",
            video: "https://vidsrc.me/embed/movie?tmdb=12345",
            cast: [
                "Actor 1 as Role 1",
                "Actor 2 as Role 2"
                // ... add more cast members ...
            ],
            genres: "Genre1, Genre2",
            rating: "Rating",
            trailer: "https://www.youtube.com/embed/trailer-id"
        },
        "loveme": {
            title: "Love Me",
            year: "2025",
            poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Love_Me_%282024_film%29_poster.jpg",
            description: "A romantic drama about the complexities of love and relationships.",
            director: "Director Name",
            releaseDate: "Release Date",
            video: "https://vidsrc.me/embed/movie?tmdb=12345",
            cast: [
                "Actor 1 as Role 1",
                "Actor 2 as Role 2"
                // ... add more cast members ...
            ],
            genres: "Romance, Drama",
            rating: "Rating",
            trailer: "https://www.youtube.com/embed/trailer-id"
        },
        // ... add other movies here ...
    };

    const urlParams = new URLSearchParams(window.location.search);
    const movieKey = urlParams.get('movie');
    console.log("Movie Key:", movieKey); // Debugging line

    if (movies[movieKey]) {
        const movie = movies[movieKey];
        console.log("Movie Data:", movie); // Debugging line
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-title-header').textContent = movie.title;
        document.getElementById('movie-year').textContent = `Year: ${movie.year}`;
        document.getElementById('movie-poster').src = movie.poster;
        document.getElementById('movie-description').textContent = movie.description;
        document.getElementById('movie-director').textContent = movie.director;
        document.getElementById('movie-release-date').textContent = movie.releaseDate;
        document.getElementById('movie-video').src = movie.video;
        document.getElementById('movie-genres').textContent = movie.genres;
        document.getElementById('movie-rating').textContent = movie.rating;
        document.getElementById('movie-trailer').src = movie.trailer;

        const castList = document.getElementById('movie-cast');
        castList.innerHTML = ''; // Clear existing cast members
        movie.cast.forEach(castMember => {
            const li = document.createElement('li');
            li.textContent = castMember;
            castList.appendChild(li);
        });
    } else {
        document.getElementById('movie-title').textContent = "Movie not found";
    }
});
