// script.js

// Add smooth scrolling to links
document.querySelectorAll('a[href^="#"]'). forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Form submission (basic)
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your messgae!');
    form.reset();
});