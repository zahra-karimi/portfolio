
// Get the button
const topButton = document.getElementById('topButton');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
};
