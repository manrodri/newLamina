const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link');
const catalogBtn = document.getElementById('catalogo');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

catalogBtn.addEventListener(() => {
    fetch('https://laminahigienetotal.es/catalogo/');
})
