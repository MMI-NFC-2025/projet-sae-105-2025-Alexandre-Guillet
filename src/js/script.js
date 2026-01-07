const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

const videoButtons = document.querySelectorAll(".carousel__item[data-trailer]");
const closeBtn = document.querySelector(".close-btn");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("no-scroll");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  nav.classList.toggle("header__nav--active");
});

videoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const trailerUrl = button.getAttribute("data-trailer");
    openVideo(trailerUrl);
  });
});
closeBtn.addEventListener("click", closeVideo);

function openVideo(url) {
  player.src = url;
  modal.classList.remove("close");
}

function closeVideo() {
  player.src = "";
  modal.classList.add("close");
}
