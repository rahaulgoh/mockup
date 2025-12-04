document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            hero.classList.add("shrink");
            navbar.classList.add("scrolled");
        } else {
            hero.classList.remove("shrink");
            navbar.classList.remove("scrolled");
        }
    });
});
