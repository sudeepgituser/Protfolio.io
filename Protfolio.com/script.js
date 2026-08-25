// Scroll reveal animations
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".hero-left", { origin: "left", distance: "50px", duration: 1000, delay: 300 });
  ScrollReveal().reveal(".hero-right", { origin: "right", distance: "50px", duration: 1000, delay: 500 });
  ScrollReveal().reveal(".navbar", { origin: "top", distance: "20px", duration: 800, delay: 200 });
  ScrollReveal().reveal(".about-img", { origin: "left", distance: "50px", duration: 1000, delay: 200 });
  ScrollReveal().reveal(".about-content", { origin: "right", distance: "50px", duration: 1000, delay: 300 });
  ScrollReveal().reveal(".skill-group", { origin: "bottom", distance: "40px", duration: 800, interval: 100 });
  ScrollReveal().reveal(".timeline-item", { origin: "left", distance: "40px", duration: 800, interval: 150 });
  ScrollReveal().reveal(".project-card", { origin: "bottom", distance: "40px", duration: 800, interval: 100 });
  ScrollReveal().reveal(".education-card", { origin: "bottom", distance: "40px", duration: 800 });
  ScrollReveal().reveal(".contact-section .container", { origin: "bottom", distance: "60px", duration: 1000, delay: 200 });
}

// Close the mobile menu automatically after a nav link is tapped
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menuToggle) menuToggle.checked = false;
    });
  });
});

// Send the enquiry as a WhatsApp message
function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in your name, email, and message first.");
    return;
  }

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phone = "919110446638"; // WhatsApp number with country code
  const link = `https://wa.me/${phone}?text=${text}`;

  window.open(link, "_blank");
}

// Send the enquiry as an email via FormSubmit
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formAction = "https://formsubmit.co/sudeepsrskp@gmail.com";
  const formData = new FormData(form);

  fetch(formAction, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      alert("Message sent successfully! I'll get back to you soon.");
      form.reset();
    })
    .catch(() => {
      alert("Something went wrong. Please email me directly at sudeepsrskp@gmail.com");
    });
}
