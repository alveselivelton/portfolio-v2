const changeTheme = document.querySelector("#chk");
const html = document.querySelector("html");
const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-link");

changeTheme.addEventListener("change", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  } else {
    localStorage.removeItem("dark", 1);
  }
});

const loadTheme = () => {
  const darkTheme = localStorage.getItem("dark", 1);
  if (darkTheme) {
    html.classList.add("dark");
  }
};

loadTheme();

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
