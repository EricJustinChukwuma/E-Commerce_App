/*const bar = document.getElementById("bar");
const navBar = document.getElementById("navbar");

if (bar === true) {
    bar.addEventListener("click", () => {
            navBar.classList.add("active");
        });
}*/


const bar = document.getElementById("bar");
const closeNav = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
};

if (closeNav) {
    closeNav.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}
 