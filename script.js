// For Responsiveness of the navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const headerRight = document.querySelector(".header-right");

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    headerRight.classList.toggle("active");
});

// Toggle Button
const toggleButton = document.querySelector(".toggle-btn");
let body = document.querySelector("body");
let navBar = document.querySelector(".nav-bar");

let currMode = body.classList.contains("light") ? "light" : "dark";

if (currMode === "dark") {
    toggleButton.classList.add("fa-toggle-off");
} else {
    toggleButton.classList.add("fa-toggle-on");
}

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("fa-toggle-on");
    toggleButton.classList.toggle("fa-toggle-off");
    
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        navBar.classList.add("dark");
        navBar.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        navBar.classList.add("light");
        navBar.classList.remove("dark");
    }
});
