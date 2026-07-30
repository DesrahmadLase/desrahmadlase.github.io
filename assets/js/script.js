/* ==========================================
   PORTFOLIO WEBSITE v1.2
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }

    /* ==========================================
       GALLERY LIGHTBOX
    ========================================== */

    const galleryImages = document.querySelectorAll(".gallery img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (
        galleryImages.length &&
        lightbox &&
        lightboxImage &&
        closeBtn &&
        prevBtn &&
        nextBtn
    ) {

        let currentImage = 0;

        function showImage(index) {

            lightboxImage.src = galleryImages[index].src;

        }

        galleryImages.forEach((image, index) => {

            image.addEventListener("click", () => {

                currentImage = index;
                showImage(currentImage);
                lightbox.classList.add("active");

            });

        });

        closeBtn.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {

                lightbox.classList.remove("active");

            }

        });

        nextBtn.addEventListener("click", () => {

            currentImage++;

            if (currentImage >= galleryImages.length) {

                currentImage = 0;

            }

            showImage(currentImage);

        });

        prevBtn.addEventListener("click", () => {

            currentImage--;

            if (currentImage < 0) {

                currentImage = galleryImages.length - 1;

            }

            showImage(currentImage);

        });

        document.addEventListener("keydown", (e) => {

            if (!lightbox.classList.contains("active")) return;

            if (e.key === "Escape") {

                lightbox.classList.remove("active");

            }

            if (e.key === "ArrowRight") {

                nextBtn.click();

            }

            if (e.key === "ArrowLeft") {

                prevBtn.click();

            }

        });

    }

});