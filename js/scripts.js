const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-link");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
