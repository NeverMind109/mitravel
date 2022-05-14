import { auto } from "@popperjs/core";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const featuredVideos = document.querySelector(".slider-container");
const heroMedia = document.querySelector(".swiper-container");
const heroPlay = document.querySelectorAll(".main-slider__play");

heroPlay.forEach((el) => {
  el.addEventListener("click", (e) => {
    let video = e.currentTarget
      .closest(".main-slider__media")
      .querySelector("video");
    video.play();
    e.currentTarget.style.display = "none";
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000);
  });
});

const featuredVideosSlider = new Swiper(featuredVideos, {
  loop: true,
  centeredSlides: true,
  spaceBetween: 50,
  slidesPerView: auto,
  breakpoints: {
    768: {
      spaceBetween: 105,
    },
  },
});

const heroMediaSlider = new Swiper(heroMedia, {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: ".hero-btn-right",
    prevEl: ".hero-btn-left",
  },
});
heroMediaSlider.on("transitionEnd", function () {
  let videos = document.querySelectorAll(".hero__slider video");
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  heroPlay.forEach((el) => {
    el.style.display = "block";
  });
});
