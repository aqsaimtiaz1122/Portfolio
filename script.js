const contactButton = document.getElementById('contactBtn');

contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Opening your email app...');
    window.location.href = 'mailto:aqsaimtiaz1122@gmail.com';
});

console.log('JavaScript loaded! Day 4 Start! 💙');
// Dark Mode Toggle
const themeButton = document.getElementById('themeBtn');
const body = document.body;

themeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '☀️ Light Mode';
    } else {
        themeButton.innerHTML = '🌙 Dark Mode';
    }
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-status").innerText = "Message sent successfully ✅";
  this.reset();
});
