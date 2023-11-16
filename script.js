function toggler(divId) {
    $("#" + divId).toggle();
}
$(".search-menu").hide(); 
/*function f1() {
    toggler('search-menu');
    $(".search-menu").show();
    

}*/

function divshower() {
    var x = document.getElementById("search-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


// TESTI FUNKTSIOON MIS KUVAB ETTE OTSINGU REALT SISESTATUD TEKSTI ELEMENTI
// TEST FUNC :/ MAY BE CHANGED
function done() {
    var x = document.getElementById("bar").value;
    var z = document.querySelector(".inf-out").textContent = x;
    const t = "SEARCH DATA IS EMPTY!"
    if (x == "") {
        document.querySelector(".inf-out").textContent = "INSERT DATA INTO SEARCH BAR!!";
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "error");
        newDiv.innerHTML = t;
        newDiv.style.backgroundColor = "red";
        newDiv.style.color = "white";
        newDiv.style.padding = "10px";
        newDiv.style.marginLeft = "150px"
        newDiv.style.marginTop = "209px"
        newDiv.style.fontSize = "20px"
    } else {
        const element = document.getElementById("error");
        element.remove(); 
    }
    

    document.querySelector(".inf-out").textContent = z;
   
    const parent = document.getElementById("search-menu");
    parent.appendChild(newDiv);
}








  
