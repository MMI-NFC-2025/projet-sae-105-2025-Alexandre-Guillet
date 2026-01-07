const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("no-scroll");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  nav.classList.toggle("header__nav--active");
});

function openVideo(url) {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  player.src = url;
  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  player.src = "";
  modal.style.display = "none";
}
