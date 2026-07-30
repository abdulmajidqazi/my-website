/*=========================================
    PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});

/*=========================================
    TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

const words = [

    "BSAI Student",

    "Python Developer",

    "AI Enthusiast",

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================================
    SCROLL REVEAL
=========================================*/

const sections = document.querySelectorAll(".section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*=========================================
    IMAGE MODAL
=========================================*/

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".view-image").forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = button.dataset.image;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

/*=========================================
    BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    }

    else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
    ACTIVE NAV LINK
=========================================*/

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});