const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("no-scroll");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  nav.classList.toggle("header__nav--active");
});
