document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        console.log('Menu toggled'); // Check if this appears in console
        navLinks.classList.toggle('active');
    });
});