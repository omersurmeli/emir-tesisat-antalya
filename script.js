// ==========================================
// EMİR TESİSAT ANTALYA
// ANA JAVASCRIPT DOSYASI
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Menü bağlantıları
    const navLinks = document.querySelectorAll(
        '.navbar a, .footer-links a, .hero-buttons a'
    );

    // Yumuşak kaydırma
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            }

        });

    });


    // Sayfa kaydırıldığında header gölgesi
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 4px 18px rgba(0, 0, 0, 0.10)";

        } else {

            header.style.boxShadow =
                "0 2px 10px rgba(0, 0, 0, 0.05)";

        }

    });


    // Footer yılını otomatik güncelle
    const footerText = document.querySelector(".footer-bottom p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            "© " +
            currentYear +
            " Emir Tesisat Antalya. Tüm hakları saklıdır.";

    }


    console.log("Emir Tesisat Antalya web sitesi başarıyla yüklendi.");

});