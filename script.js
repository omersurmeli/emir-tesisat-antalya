document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar");
    const header = document.querySelector(".header");

    const closeMenu = () => {
        menu.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menüyü aç");
        document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
        document.body.classList.toggle("menu-open", isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) closeMenu();
    });

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    document.getElementById("current-year").textContent = new Date().getFullYear();
});
