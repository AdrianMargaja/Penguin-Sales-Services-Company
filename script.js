const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Smooth Scrolling
const navLinks = document.querySelectorAll("a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // adjust offset for fixed header
            behavior: "smooth"
        });
    });
});

// Service Search Filter
const searchInput = document.getElementById("searchInput");
const servicesList = document.getElementById("servicesList");
const services = servicesList.getElementsByClassName("service-card");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(services).forEach(service => {
        const serviceName = service.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (serviceName.includes(filter)) {
            service.style.display = "";
        } else {
            service.style.display = "none";
        }
    });
});
