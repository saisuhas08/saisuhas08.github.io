// Typing Animation for Name
const nameElement = document.querySelector('.classic-name');
const name = "Sai Suhas Gullepelli";
let index = 0;

function typeName() {
    if (index < name.length) {
        nameElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 100);
    }
}

// Smooth Scroll for Navigation Links
const scrollLinks = document.querySelectorAll('nav.menu-bar ul li a');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation for Sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize Animations on Load
window.onload = function() {
    typeName();
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 1s, transform 1s';
    });
};
