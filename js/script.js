document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var swiper = new Swiper('.hero-carousel', {
    direction: 'horizontal',
    loop: true,
    autoplay: 1000,
    autoplayStopOnLast: false, // loop false also
    pagination: {
      el: '.hero-carousel__pagination',
      clickable: true,
    },
    // Specify your custom slide class
    slideClass: 'hero-carousel__container__item',
  });
});