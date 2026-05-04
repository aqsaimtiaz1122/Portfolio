document.addEventListener('DOMContentLoaded', function() {
    
    // Contact Button - Sirf tab chalao agar button hai
    const contactButton = document.getElementById('contactBtn');
    if(contactButton) {
        contactButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Opening your email app...');
            window.location.href = 'mailto:aqsaimtiaz1122@gmail.com';
        });
    }

    // Dark Mode Toggle - Fixed
    const themeBtn = document.getElementById('themeBtn');
    if(themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if(document.body.classList.contains('dark-mode')) {
                themeBtn.innerHTML = '☀️ Light Mode';
            } else {
                themeBtn.innerHTML = '🌙 Dark Mode';
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("form-status").innerText = "Message sent successfully ✅";
            this.reset();
        });
    }
    
    console.log('JavaScript loaded! No errors 💙');
});
