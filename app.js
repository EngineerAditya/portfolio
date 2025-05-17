document.addEventListener("DOMContentLoaded", function () {
  new Typed(".auto-type", {
    strings: [
      "<i>I'm a Machine Learning Enthusiast</i>",
      "<i>I'm an Aspiring Developer</i>",
      "<i>I am Aditya Sinha</i>"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  // Toggle mobile menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
