
 let Starsgained = 0 ;
function noOfStars(star){
    Starsgained = star ;
    document.getElementById("selected-rating").innerHTML = star ;
    highlighter(star) ;

}
function highlighter(star){
    for(let i = 1 ; i <= star ; i++){
       let st =  document.getElementById("btn" + i) ;
       st.classList.add("selected");
    }
}

function displayChanger(){
    if(Starsgained == 0){
        alert("please select atleast one star. \n 💔💔");
        return ;
    }
   
    document.getElementById("welcome").classList.add("hide") ;
    document.getElementById("thank").classList.remove("hide") ;
}

