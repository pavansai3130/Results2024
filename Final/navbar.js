
let nav = document.getElementById("navlinks");

function showmenu() {
    nav.style.top = "0px";
    document.body.style.overflow="hidden";
}
function hidemenu() {
    nav.style.top = "-2000px";
    document.body.style.overflow="visible";
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
