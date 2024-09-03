const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
	console.log(slide)

    console.log("onclick");
    if (!slide.classList.contains("open")) {
      const currentOpenSlide = document.querySelector(".slide.open");
      if (currentOpenSlide && slide) {
        swapSlideContent(currentOpenSlide, slide);
      } else {
        swapDefault(slide);

			}
    }
  });
});

function swapSlideContent(openSlide, clickedSlide) {
  const tempId = openSlide.id;
  openSlide.id = clickedSlide.id;
  clickedSlide.id = tempId;
  openSlide.classList.remove("open");
  openSlide.classList.remove("default");
  openSlide.classList.add("closed");
  clickedSlide.classList.remove("default");

  clickedSlide.classList.remove("closed");
  clickedSlide.classList.add("open");
}

function swapDefault(clickedSlide) {
  clickedSlide.classList.remove("default");
  clickedSlide.classList.add("open");
	const defaultSlide = document.querySelector(".default");
	console.log(defaultSlide)
  defaultSlide.classList.add("closed");
defaultSlide.classList.remove('default')
const defaultSlide2 = document.querySelector(".default");
	console.log(defaultSlide2)
  defaultSlide2.classList.add("closed");
defaultSlide2.classList.remove('default')

}