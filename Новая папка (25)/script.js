function post(title) {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=21c013d3`)
    .then((response) => {
        if (!response.ok) {
            console.error('Network response was not ok');
            return;
        }
        return response.json();
    })
    .then((data) => {
        if (!data) {
            console.error('No data received');
            return;
        }
        console.log(data);
        const movie = `
            <h1>${data.Title} (${data.Year})</h1>
            <p>Director: ${data.Director}</p>
            <p>Actors: ${data.Actors}</p>
            <p>Plot: ${data.Plot}</p>
            <img src="${data.Poster}" alt="">
        `; 
        document.getElementById('movie').innerHTML = movie;
    })
    .catch((err) => console.error(err));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const inputMovie = document.getElementById("movieTitle").value.trim();
        if (inputMovie === "") {
            alert("Please enter a movie title.");
            return;
        }
        post(inputMovie);
    });
});
