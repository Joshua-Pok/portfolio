document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Including gap
    const maxIndex = cards.length - Math.floor(slides.offsetWidth / cardWidth);

    // Initialize button states
    updateButtonStates();

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    function updateSliderPosition() {
        slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateButtonStates();
    }

    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    // Update on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset position and update maxIndex
            currentIndex = 0;
            slides.style.transform = 'translateX(0)';
            maxIndex = cards.length - Math.floor(slides.offsetWidth / cardWidth);
            updateButtonStates();
        }, 250);
    });
});