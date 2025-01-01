// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true, // Enable loop mode
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Pagination bullets are clickable
    },
    navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
    },
    slidesPerView: 1, // Number of slides visible at once
    spaceBetween: 20, // Space between slides in pixels
});
