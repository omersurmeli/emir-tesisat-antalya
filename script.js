const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");
const header = document.querySelector(".site-header");

const closeMenu = () => {
  menu.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Menüyü aç";
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Menüyü kapat" : "Menüyü aç";
  document.body.classList.toggle("menu-open", isOpen);
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 16), { passive: true });
document.getElementById("current-year").textContent = new Date().getFullYear();
