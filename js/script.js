
function menuClick() {
    const menuLateral = document.getElementById("menuLateral");
    const x = document.getElementById("myTopnav");
    if (menuLateral.className === "menuLateral-display") {
        menuLateral.className = "menuLateral-hide"
    } else {
        menuLateral.className = "menuLateral-display"
    }
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("myTopnav");
    menu.addEventListener("click", () => {
        menuClick()
    });

});
