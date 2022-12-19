let navLinks = document.querySelectorAll(".header-area .links a");
let navBar = document.querySelector(".header-area .links");
let menuToggle = document.querySelector(".header-area .menu-toggle");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        navLink.classList.add("active");
        toggleNavBar();
    })
})

function toggleNavBar() {
    navBar.classList.toggle("active-links");
}