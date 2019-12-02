function change() {
    if (document.getElementById("CheckMeteo").checked == true)
        document.getElementById("weather").style.display = "block";
    else
        document.getElementById("weather").style.display = "none";
    if (document.getElementById("CheckMovieList").checked == true)
        document.getElementById("MovieList").style.display = "block";
    else
        document.getElementById("MovieList").style.display = "none";
    if (document.getElementById("CheckMovieDesc").checked == true)
        document.getElementById("MovieDesc").style.display = "block";
    else
        document.getElementById("MovieDesc").style.display = "none";
    if (document.getElementById("CheckMovieRatings").checked == true)
        document.getElementById("MovieRatings").style.display = "block";
    else
        document.getElementById("MovieRatings").style.display = "none";
    if (document.getElementById("CheckMap").checked == true)
        document.getElementById("generateMap").style.display = "block";
    else
        document.getElementById("generateMap").style.display = "none";
    if (document.getElementById("CheckCurrencyConv").checked == true)
        document.getElementById("MoneyConverter").style.display = "block";
    else
        document.getElementById("MoneyConverter").style.display = "none";

}