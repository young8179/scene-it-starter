
const localS = localStorage.getItem("watchlist")
const localJSON = JSON.parse(localS)
const listContainer = document.getElementById("list-container")

document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
   
    listContainer.innerHTML = renderWatchList(localJSON)
    number()
    
    
    
});


function renderWatchList(local){
    const listHtmlArray = local.map((list) => {
        
        
        return `
                <tr class="align-items-center" id="${localJSON.number}">
                
                <td><img style="height:200px"src="${list.Poster}" alt=""></td>
                <td>${list.Title}</td>
                <td>${list.Year}</td>
                <td><button type="button" onclick="remove()" id="${localJSON.number}">Remove</button></td>
                </tr>
                `
                
                
    })

    
    return listHtmlArray.join("")
            
             
}

function number(){
    let num= 0
    Object.keys(localJSON).map(
        function(object){
            num++
            localJSON[object]["number"]=`${num}`
        });
        
    }  
    console.log(localJSON);


function remove(){
    let removeWch = document.getElementById(localJSON.number)
    removeWch.parentNode.removeChild(removeWch)
    
    
    // localJSON.splice(localJSON.number-1,1)
    // localJSON.join("")
    // let jjson = JSON.stringify(localJSON);
    // localStorage.setItem("dump", jjson);
    

    
    
}

