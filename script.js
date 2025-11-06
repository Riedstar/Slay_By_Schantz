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
    });
    // Time slot validation
const bookingDate = document.getElementById('bookingDate');
const bookingTime = document.getElementById('bookingTime');
bookingDate.addEventListener('change', () => {
    bookingTime.required = !!bookingDate.value; // Required only if date selected
    if (bookingDate.value) {
        bookingTime.classList.add('show'); // Optional CSS for fade-in
    }
});
});

