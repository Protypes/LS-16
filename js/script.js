document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    //autoplay: {
      //delay: 3000
    //},
  });
});