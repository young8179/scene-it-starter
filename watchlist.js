
const localS = localStorage.getItem("watchlist")
const localJSON = JSON.parse(localS)
const listContainer = document.getElementById("list-container")

document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
   
    listContainer.innerHTML = renderWatchList(localJSON)
    // number()
    
    
    
});


function renderWatchList(local){
    const listHtmlArray = local.map((list, index) => {
        
        
        return `
                <tr class="align-items-center" id="${index}">
                
                <td><img style="height:200px"src="${list.Poster}" alt=""></td>
                <td>${list.Title}</td>
                <td>${list.Year}</td>
                <td><button type="button" onclick="remove(${index})" id="${index}">Remove</button></td>
                </tr>
                `
                
                
    })

    
    return listHtmlArray.join("")
            
             
}

// function number(){
//     let num= 0
//     Object.keys(localJSON).map(
//         function(object){
//             num++
//             localJSON[object]["number"]=`${num}`
//         })
        
//     } 
    // console.log(localJSON);


function remove(index){
    let removeWch = document.getElementById(index)
    removeWch.parentNode.removeChild(removeWch)
    
    const watchList = JSON.parse(localStorage.getItem("watchlist"))
    // 

    watchList.splice(index,1)
    
    let jjson = JSON.stringify(watchList);
    localStorage.setItem("watchlist", jjson);
    

    
    
}

