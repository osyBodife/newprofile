
 function showHideMainMenu() {
    var x = document.getElementById("tiger");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}



function popUpPwdFunction() {
    var poppwdinfo = document.getElementById("Poppwd");
    poppwdinfo.classList.toggle("show");
}