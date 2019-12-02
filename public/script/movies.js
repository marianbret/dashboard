function moviesList() {
    console.log("movielist");
    var apiKey = 'd8b4e832';
    var movies = document.getElementById("MovieListInput").value;
    if (movies != '') {
        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + movies,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var listMovies = data.Search;
                var temp = "";
                temp += '<tr><TH>MOVIES</TH><TH>YEAR</TH><TH>TYPE</TH></tr>';
                for (var i in listMovies) {
                    temp += `<tr><td>${listMovies[i].Title}</td><td>${listMovies[i].Year}</td><td>${listMovies[i].Type}</td></tr>`;
                }
                document.getElementById("listMovies").innerHTML = temp;
            }
        })
    }
}

setInterval(moviesList, 30000);

function moviesDesc() {
    console.log("moviedesc");
    var apiKey = 'd8b4e832';
    var movies = document.getElementById("MovieDescInput").value;
    if (movies != '') {
        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + movies,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var director = `Directors : ${data.Director}`
                var actor = `Actors : ${data.Actors}`
                var released = `Released date : ${data.Released}`
                var genre = `Genre : ${data.Genre}`
                var plot = `Plot : ${data.Plot}`
                document.getElementById("director").innerHTML = director;
                document.getElementById("actors").innerHTML = actor;
                document.getElementById("released").innerHTML = released;
                document.getElementById("genre").innerHTML = genre;
                document.getElementById("plot").innerHTML = plot;
            }
        })
    }
}

setInterval(moviesDesc, 30000);

function moviesRatings() {
    console.log("movieratings");
    var apiKey = 'd8b4e832';
    var movies = document.getElementById("MovieRatingsInput").value;
    if (movies != '') {
        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + movies,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var awards = `Awards : ${data.Awards}`
                var boxOffice = `Box office : ${data.BoxOffice}`
                var imdbRating = `Votes imdb : ${data.imdbVotes}`
                var list = data.Ratings;
                var tempR = "";
                tempR += '<tr><TH>SOURCE</TH><TH>RATING</TH></tr>';
                for (var i in list)
                    tempR += `<tr><td>${list[i].Source}</td><td>${list[i].Value}</td></tr>`;
                document.getElementById("awards").innerHTML = awards;
                document.getElementById("boxOffice").innerHTML = boxOffice;
                document.getElementById("imdbRating").innerHTML = imdbRating;
                document.getElementById("listRatings").innerHTML = tempR;
            }
        })
    }
}

setInterval(moviesRatings, 30000);