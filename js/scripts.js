const html = document.querySelector("html");
const navbarLogo = document.querySelector("#navbar-logo");
const changeTheme = document.querySelector("#chk");
const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-link");

const loadTheme = () => {
  const darkTheme = localStorage.getItem("dark");
  if (darkTheme) {
    html.classList.add("dark");
    changeTheme.checked = true;
  }
};

loadTheme();

changeTheme.addEventListener("change", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  } else {
    localStorage.removeItem("dark", 1);
  }
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navbarLogo.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
