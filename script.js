const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");
const header = document.querySelector(".site-header");

const closeMenu = () => {
  menu.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Menüyü aç");
  menuButton.querySelector(".sr-only").textContent = "Menüyü aç";
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Menüyü kapat" : "Menüyü aç";
  document.body.classList.toggle("menu-open", isOpen);
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (menu.classList.contains("open") && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});
window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 16), { passive: true });
document.getElementById("current-year").textContent = new Date().getFullYear();

document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".accordion button").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.nextElementSibling.hidden = true;
    });
    if (!wasOpen) {
      button.setAttribute("aria-expanded", "true");
      button.nextElementSibling.hidden = false;
    }
  });
});
