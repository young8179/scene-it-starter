
const button = document.getElementById("button")
const box = document.getElementById("box")
document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
   saveToWatchlist(imdbID)
   
    
    
});



var movieBox = document.getElementById("movies-container")
button.addEventListener("click", (event) =>{
    event.preventDefault()
    
    movieBox.innerHTML = renderMovies(movieData)
})


function renderMovies(movieArray){
    const movieHtmlArray = movieArray.map((currentMovie) => {
        return `
                <div class="col-lg-3 m-2" id="movies-container">
                    <div class="movie">
                        <div class="card" style="width: 20rem; height: 38rem;">
                            <img class="card-img-top" src="${currentMovie.Poster}">
                            <div class="card-body">
                                <h5 class="card-title" style="font-size: 15px;">${currentMovie.Title}</h5>
                                <p class="card-text">${currentMovie.Year}</p>
                                <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')" id="${currentMovie.imdbID}">add</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        
    })
    
    return movieHtmlArray.join("") 
}

function saveToWatchlist(imdbID){
    console.log(imdbID)
    let movie =  movieData.find((currentMovie)=>{
        return currentMovie.imdbID == imdbID;
        
        
    });
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON)
    if(watchlist ==null){
        watchlist = []
    }
    
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
    
    
    console.log(watchlist)
}
















// const button = document.getElementById("button")
// const box = document.getElementById("box")

// button.addEventListener("click", function(event){
//     event.preventDefault()
//     renderMovies()

// })




// function renderMovies(){
    
//     htmlString = ""
//     fetch('./data.js')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(htmlString) {
//         const container = document.getElementById('movies-container');
//         for (const data of movieData) {
//             htmlString += `
//             <div class="col-lg-3 m-2" id="movies-container">
//                 <div class="movie">
//                     <div class="card" style="width: 18rem;">
//                         <img class="card-img-top" src="${data.Poster}">
//                         <div class="card-body">
//                             <h5 class="card-title">${data.Title}</h5>
//                             <p class="card-text">${data.Year}</p>
//                             <a href="#" class="btn btn-primary">add</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             `
//         }
//         container.textContent = htmlString;
        
//     })


// }





