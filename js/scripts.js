console.log("Hi, welcome to my Portfolio site!"); 

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("fa-xmark");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  hamburger.classList.remove("fa-xmark");
});

