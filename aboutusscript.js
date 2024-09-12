window.addEventListener('scroll', function() {
    var nav = document.getElementById('section1');
    var scrollPosition = window.scrollY;
    var maxScroll = 400; // Adjust this value to control when the nav starts fading out
    var opacity = 1 - (scrollPosition / maxScroll); // Adjust divisor for fade effect distance

    // Ensure opacity is between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity)); // Set minimum opacity to 0 to make it fully disappear

    // Apply styles to the navigation bar
    nav.style.opacity = opacity;
    nav.style.visibility = opacity > 0 ? 'visible' : 'hidden';
});
