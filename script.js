document.getElementById('congratsButton').addEventListener('click', function() {
    // Add fade-out class to the button to animate its disappearance
    this.classList.add('fade-out');
    
    // Hide the intro text
    document.getElementById('intro').classList.add('hidden');

    // Show the message after a short delay
    setTimeout(function() {
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('secondButton').classList.remove('hidden');
    }, 1000); // Wait for the fade-out animation to complete
});

document.getElementById('secondButton').addEventListener('click', function() {
    window.location.href = 'heart_animation.html';
});