
function tptogame(){
    p1= document.getElementById("p1").value;
    p2= document.getElementById("p2").value;
    localStorage.setItem("p1", p1 );
    localStorage.setItem("p2", p2 );
window.location = "game_page.html";
}
