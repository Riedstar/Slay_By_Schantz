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
        // Mobile image swap: After-only for clean fit
function swapToMobileImages() {
    if (window.innerWidth < 768) { // iPhone & small screens
        document.querySelectorAll('.transformation-img').forEach(img => {
            const alt = img.alt;
            if (alt.includes('Classic')) img.src = 'images/classic_lashes_after_mobile.jpg';
            else if (alt.includes('Hybrid')) img.src = 'images/hybrid_lashes_after_mobile.jpg';
            else if (alt.includes('Volume')) img.src = 'images/volume_lashes_after_mobile.jpg';
            else if (alt.includes('Multi-Color')) img.src = 'images/multicolor_lashes_after_mobile.jpg';
        });
    }
}

// Run on load and resize
window.addEventListener('load', swapToMobileImages);
window.addEventListener('resize', swapToMobileImages);
    });
});

