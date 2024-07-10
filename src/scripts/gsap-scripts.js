gsap.registerPlugin(ScrollTrigger);

function animateElements(className) {
  gsap.from(className, {
    scale: 0,
    duration: 1.5,
    ease: "elastic.out(1.4, 0.3)",
    scrollTrigger: {
      trigger: className,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
    stagger: {
      each: 0.2,
      grid: "auto",
      from: "start",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".mesto-icon", {
    scale: 0,
    duration: 1.5,
    ease: "elastic.out(1.4, 0.3)",
    scrollTrigger: {
      trigger: ".mesto-icon",
      start: "top 90%",
      end: "top 65%",
      scrub: true,
    },
    stagger: {
      each: 0.2,
      grid: "auto",
      from: "start",
    },
  });
});


document.addEventListener("DOMContentLoaded", () => {
  animateElements(".reveal");
  animateElements(".pet-icon");
});