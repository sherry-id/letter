
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bg-music");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function startSlides() {
    currentSlide = 1;
    showSlide(currentSlide);
    music.play();
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}
