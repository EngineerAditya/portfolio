const typed = new Typed(".auto-type", {
  strings: [
    "Aspiring AI Engineer.",
    "Aspiring Machine Learning Engineer.",
    "Building Projects with Computer Vision.",
    "Exploring Data Science.",
    "Learning Deep Learning.",
    "Solving Real Problems with AI."
  ],
  typeSpeed: 45,
  backSpeed: 30,
  backDelay: 1500,
  startDelay: 300,
  smartBackspace: true,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});





  // Toggle mobile menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
