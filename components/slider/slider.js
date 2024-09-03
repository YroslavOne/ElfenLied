const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    console.log("onclick");
    if (!slide.classList.contains("open")) {
      const currentOpenSlide = document.querySelector(".slide.open");
      if (currentOpenSlide && slide) {
        swapSlideContent(currentOpenSlide, slide);
      }
    }
  });
});

function swapSlideContent(openSlide, clickedSlide) {
  const tempId = openSlide.id;
  openSlide.id = clickedSlide.id;
  clickedSlide.id = tempId;

  openSlide.classList.remove("open");
  openSlide.classList.add("closed");
  clickedSlide.classList.remove("closed");
  clickedSlide.classList.add("open");
}
