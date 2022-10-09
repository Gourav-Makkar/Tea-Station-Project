navBtn = document.getElementById("nav-btn");
navbar = document.getElementById("navbar");
navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
