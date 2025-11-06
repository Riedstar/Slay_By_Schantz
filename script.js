// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form success message (optional)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        // Redirect or show alert on success (Formspree handles submission)
        setTimeout(() => {
            alert('Thanks! We\'ll get back to you soon.');
        }, 1000);
		
		document.querySelectorAll('.image-slider').forEach(slider => {
    let isAfter = false;
    slider.addEventListener('click', () => {
        const before = slider.querySelector('.before');
        const after = slider.querySelector('.after');
        if (isAfter) {
            before.style.opacity = 1;
            after.style.opacity = 0;
        } else {
            before.style.opacity = 0;
            after.style.opacity = 1;
        }
        isAfter = !isAfter;
    });
});
    });
});