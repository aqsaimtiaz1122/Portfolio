const contactButton = document.getElementById('contactBtn');

contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Opening your email app...');
    window.location.href = 'mailto:aqsaimtiaz1122@gmail.com';
});

console.log('JavaScript loaded! Day 4 Start! 💙');
