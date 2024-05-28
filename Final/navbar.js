
let nav = document.getElementById("navlinks");

function showmenu() {
    nav.style.top = "0px";
}

function hidemenu() {
    nav.style.top = "-2000px";
}
let flag = false;
function func() {
    if (flag) {
        document.getElementById("tooltip").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("tooltip").style.display = "flex";
        flag = true;
    }
}
