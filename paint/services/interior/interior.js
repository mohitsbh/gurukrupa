// Toggle function for the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');  // Get the nav menu
    const hamburger = document.getElementById('hamburger');  // Get the hamburger icon

    navLinks.classList.toggle('active');  // Toggle the 'active' class on menu links
    hamburger.classList.toggle('open');  // Toggle the 'open' class on hamburger icon
}
