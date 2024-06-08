navEl = document.querySelector(".nav");
hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
});

/* nav__linkEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
  });
  
  nav__linkEl.addEventListener("click", () => {
      navEl.classList.remove("nav--open");
      hamburgerEl.classList.remove("hamburger--open");
  });
*/
