// ------------------------------
// Gallery Filter Function
// ------------------------------

function filterSelection(category) {

    const images = document.querySelectorAll(".image");

    images.forEach(function(image) {

        if (category === "all") {
            image.style.display = "block";
        }
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        else {
            image.style.display = "none";
        }

    });

}

// ------------------------------
// Contact Form Confirmation
// ------------------------------

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent page refresh
        event.preventDefault();

        // Show confirmation message
        document.getElementById("confirmation").textContent =
            "Thank you! Your message has been received.";

        // Clear the form
        contactForm.reset();

    });

}