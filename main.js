
const topButton = document.getElementById('topButton');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
};
