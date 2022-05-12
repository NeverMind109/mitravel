import { auto } from "@popperjs/core";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const featuredVideos = document.querySelector(".slider-container");

const featuredVideosSlider = new Swiper(featuredVideos, {
  loop: true,
  centeredSlides: true,
  spaceBetween: 105,
  slidesPerView: auto,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
