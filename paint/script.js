document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
      alert(
        "Thank you for contacting us, " +
          name +
          ". We will get back to you soon!"
      );
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
// Toggle function for the mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("nav-links"); // Get the nav menu
  const hamburger = document.getElementById("hamburger"); // Get the hamburger icon

  navLinks.classList.toggle("active"); // Toggle the 'active' class on menu links
  hamburger.classList.toggle("open"); // Toggle the 'open' class on hamburger icon
}

