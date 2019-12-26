
$("#search-movie").on("click", function(){
    movieName = $("#movieName").val().trim().replace(" ","+"); 
    location.href = "http://localhost:3000/movie/search/"+movieName;
});

$(".add-movie").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url: "/api/movie/add/" + imdbID,
        method: "POST"
    }).then(function(response){
        location.reload();
    });
});

$(".up-boat").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url:"/api/movie/up-boat/"+imdbID,
        method: "PUT"
    }).then(function(response){
        location.reload();
    });
});

$(".down-boat").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url:"/api/movie/down-boat/"+imdbID,
        method: "PUT"
    }).then(function(response){
        location.reload();
    });
});

$(".card").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url:"/api/movie/"+imdbID,
        method: "GET"
    }).then(function(response){
        console.log(response.Ratied);

    });
});