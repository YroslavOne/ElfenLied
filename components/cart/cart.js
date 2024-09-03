const modal = document.getElementById("cart-modal");
const btn = document.getElementById("cart-click");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  console.log("hi")
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
