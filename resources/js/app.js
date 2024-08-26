// Account Management Card Slider
var swiper = new Swiper(".account-management--swiper", {
  slidesPerView: 1.01,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 1500,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    576: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2.9,
    },
  },
});
