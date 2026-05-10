// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Mostrar/esconder botão de voltar ao topo
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});

// Menu mobile
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

function closeMenu() {
  navLinks.classList.remove("active");
}

document.querySelectorAll(".nav_links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});