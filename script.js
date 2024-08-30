document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');

    // Cambiar altura del hero al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            hero.style.height = '60vh';
            header.classList.add('scrolled');
        } else {
            hero.style.height = '100vh';
            header.classList.remove('scrolled');
        }

        // Animar secciones al desplazarse
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    });

    // Toggle de menú en dispositivos móviles
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
    