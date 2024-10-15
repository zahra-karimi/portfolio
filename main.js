
// scroll page up
const topButton = document.getElementById('topButton');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
};

// responsive for mobile

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-menu-list');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show'); 

    if (navLinks.classList.contains('show')) {
        mobileMenu.innerHTML = '<i class="fa-solid fa-times"></i>'; 
    } else {
        mobileMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
    }
});


