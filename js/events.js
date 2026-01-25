document.addEventListener('DOMContentLoaded', function () {
    initSlideshows();
});

function initSlideshows() {
    const slideshows = document.querySelectorAll('.event-slideshow');
    slideshows.forEach(slideshow => {
        setupSlideshow(slideshow);
    });
}

function setupSlideshow(container) {
    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    const dotsContainer = container.querySelector('.dots-container');

    if (!slides.length) return;

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300';
        dot.ariaLabel = `Go to slide ${index + 1}`;
        if (index === 0) dot.classList.add('bg-opacity-100', 'scale-125');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0';
            slide.style.zIndex = index === currentSlide ? '10' : '0';
        });
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('bg-opacity-100', 'scale-125');
                dot.classList.remove('bg-opacity-50');
            } else {
                dot.classList.remove('bg-opacity-100', 'scale-125');
                dot.classList.add('bg-opacity-50');
            }
        });
    }

    function goToSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
        updateSlides();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Auto advance
    let interval = setInterval(() => goToSlide(currentSlide + 1), 3000);

    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', () => interval = setInterval(() => goToSlide(currentSlide + 1), 3000));
}
