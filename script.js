const images = document.querySelectorAll('.grid-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-content img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.add('active');
}

images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

// Close modal when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Keyboard navigation (left/right arrows)
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "Escape") lightbox.classList.remove('active');
    }
});
