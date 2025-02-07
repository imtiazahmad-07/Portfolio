// For Responsiveness of the navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const headerRight = document.querySelector(".header-right")

menuToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle("active");
    headerRight.classList.toggle("active");
})