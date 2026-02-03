// --- ANTI-SCRAPING & COPY PROTECTION ---
document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if(e.keyCode == 123) {
        e.preventDefault();
        return false;
    }
    if(e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0))) {
        e.preventDefault();
        return false;
    }
    if(e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'S'.charCodeAt(0))) {
        e.preventDefault();
        return false;
    }
});

// --- Active Link Highlight on Scroll ---
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});

// --- Typewriter Effect ---
const texts = ["Web Developer", "Photographer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    const typeElement = document.querySelector(".typewriter");
    if(typeElement) typeElement.textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => { count++; index = 0; }, 2000); 
    }
    setTimeout(type, 150);
})();

// --- Scroll Reveal Animation ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('show'); }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
