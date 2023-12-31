// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// Scroll to top
const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Form submission alert and reset
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    form.reset();
});
