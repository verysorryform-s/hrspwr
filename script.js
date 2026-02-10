// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
