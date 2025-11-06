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

// Form submission with animated success message
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default to handle response
        const formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData
        }).then(response => response.text())
          .then(data => {
              // Clear form
              this.reset();
              // Show animated message
              const successDiv = this.id === 'bookingForm' ? document.getElementById('bookingSuccess') : document.getElementById('contactSuccess');
              successDiv.style.display = 'block';
              successDiv.style.opacity = '0';
              successDiv.style.transform = 'translateY(20px)';
              successDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              setTimeout(() => {
                  successDiv.style.opacity = '1';
                  successDiv.style.transform = 'translateY(0)';
              }, 100);
              // Hide after 5s
              setTimeout(() => {
                  successDiv.style.opacity = '0';
                  setTimeout(() => successDiv.style.display = 'none', 500);
              }, 5000);
          }).catch(err => {
              console.error('Form error:', err);
              alert('Oops—something went wrong. DM us on IG!');
          });
    });
});
