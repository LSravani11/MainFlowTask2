function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    

    alert("Thank you for your message!");
    return true; // Submit the form
}



let slideIndex = 0;
let showSlidesInterval;

// Function to show slides
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
}

// Start the slideshow
function startSlideshow() {
    showSlidesInterval = setInterval(showSlides, 2000);
}

// Stop the slideshow
function stopSlideshow() {
    clearInterval(showSlidesInterval);
}

// Toggle slideshow function
function toggleSlideshow() {
    const button = document.querySelector('.toggle-button');
    if (showSlidesInterval) {
        stopSlideshow();
        button.textContent = 'restart';
    } else {
        startSlideshow();
        button.textContent = 'Stop Slideshow';
    }
}

// Initialize slideshow on page load
window.onload = () => {
    startSlideshow();
};

