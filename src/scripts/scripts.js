import ItcSimpleSlider from "./simple-adaptive-slider.js";

const themeBtn = document.querySelector('.theme-btn');
const page = document.querySelector('.page');
const moon = page.querySelector('.moon')
const sun = page.querySelector('.sun');

themeBtn.addEventListener('click', () => {

  if (page.classList.contains('dark')) {
    moon.classList.remove('moonset'); // Если нужно убрать класс moonset при добавлении sunset
    sun.classList.remove('sunrise');
    moon.classList.add('moonrise')
    sun.classList.add('sunset');
  } else {
    moon.classList.remove('moonrise');
    sun.classList.remove('sunset'); // Если нужно убрать класс sunset при добавлении sunrise
    moon.classList.add('moonset');
    sun.classList.add('sunrise');
  }

  page.classList.toggle('dark');
  
});

  document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('#slider-burger', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });

    new ItcSimpleSlider('#slider-pet', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
  });
