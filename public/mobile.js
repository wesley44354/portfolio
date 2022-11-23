const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const option = doc.querySelectorAll(".option-menu");



option.forEach(item => {
  item.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
});



menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


