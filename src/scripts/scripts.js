import ItcSimpleSlider from "./simple-adaptive-slider.js";

const themeBtn = document.querySelector(".theme-btn");
const page = document.querySelector(".page");
const moon = page.querySelector(".moon");
const sun = page.querySelector(".sun");

themeBtn.addEventListener("click", () => {
  if (page.classList.contains("dark")) {
    moon.classList.remove("moonset");
    sun.classList.remove("sunrise");
    moon.classList.add("moonrise");
    sun.classList.add("sunset");
  } else {
    moon.classList.remove("moonrise");
    sun.classList.remove("sunset");
    moon.classList.add("moonset");
    sun.classList.add("sunrise");
  }

  page.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  // Функция для инициализации слайдера
  const initializeSlider = (selector) => {
    new ItcSimpleSlider(selector, {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
  };

  // Инициализация всех слайдеров
  const sliders = ["#slider-burger", "#slider-pet", "#slider-kupi-podari"];
  sliders.forEach(initializeSlider);
});
