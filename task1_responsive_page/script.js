const links = document.querySelectorAll(".nav-links li a");
const logoLink = document.querySelector(".logo-link");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

function setActiveLink(target) {
    links.forEach(link => link.classList.remove("active"));
    target.classList.add("active");

    // Update the URL without scrolling
    const newURL = target.getAttribute("href");
    history.pushState(null, null, newURL);
}

// Prevent scrolling when clicking navigation links but update URL
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Stops scrolling
        setActiveLink(e.target);

        hamburger.innerHTML = "&#9776;"; // Reset to menu icon

        // Close the menu after clicking a link
        navLinks.classList.remove("smallScreen");
        hamburger.classList.toggle("cancel-icon")
        logoLink.classList.toggle("smallScreen");
    });
});

// Ensure clicking the logo also activates "Home" without scrolling
logoLink.addEventListener("click", function (e) {
    e.preventDefault(); // Stops scrolling
    setActiveLink(document.querySelector("#home"));
});

// Toggle menu & change icon
hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("smallScreen");
    logoLink.classList.toggle("smallScreen");
    hamburger.classList.toggle("cancel-icon")
    if (navLinks.classList.contains("smallScreen")) {
        hamburger.innerHTML = "&#10006;"; // Change to cancel icon (✖)
    } else {
        hamburger.innerHTML = "&#9776;"; // Change back to menu icon (☰)
    }
});