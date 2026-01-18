document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("serviceSlider");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  const scrollStep = 320;

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Auto slide
  setInterval(() => {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 4000);
});
