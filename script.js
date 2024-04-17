// Toggle hamburger menu for small screens
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const hamBtn = document.getElementById("ham-btn");
hamBtn.addEventListener("click", toggleMenu);

// Typed animation setup
var typed = new Typed('#typed', {
  strings: ["a Frontend Developer.", "an Agriculture Graduate.", "a Technology Enthusiast.", "a Life Long Learner.", "a Problem Solver.", "a Gamer."],
  typeSpeed: 50,
  backSpeed: 75,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  autoStart: true,
  startDelay: 1000,
  callback: function () {
    // Callback function after typing finishes
  }
});

// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  try {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Toggle button text content between Dark Mode and Light Mode
    var darkModeToggleBtn = document.getElementById('dark-mode-toggle');
    darkModeToggleBtn.textContent = darkModeToggleBtn.textContent === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
  } catch (error) {
    console.error("Error toggling dark mode:", error);
  }
});

// Smooth scrolling with Lenis and GSAP
const lenis = new Lenis();

// Log scroll events
lenis.on('scroll', (e) => {
  // console.log(e);
});

// Request animation frame for smooth scrolling
function raf(time) {
  try {
    lenis.raf(time);
    requestAnimationFrame(raf);
  } catch (error) {
    console.error("Error with requestAnimationFrame:", error);
  }
}

requestAnimationFrame(raf);
