//the hamburger menu fro small screen
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// javascript for the typed animation from github
var typed = new Typed('#typed', {
  strings: ["a Frontend Developer.", "an Agriculture Graduate.", "a Technology Enthusiast.", "a Life Long Learner.", "a Problem Solver.", "a Gamer."],
  typeSpeed: 50, // Typing speed in milliseconds
  backSpeed: 75, // Backspacing speed in milliseconds
  loop: true, // Whether to loop the animation
  showCursor: true, // Whether to show a cursor
  cursorChar: "|", // Cursor character
  autoStart: true, // Whether to start typing automatically
  startDelay: 1000, // Delay before typing starts in milliseconds
  callback: function () { /* Callback function after typing finishes */ }
});

// dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark-mode');
  // Toggle button text content between Dark Mode and Light Mode
  var darkModeToggleBtn = document.getElementById('dark-mode-toggle');
  if (darkModeToggleBtn.textContent === 'Dark Mode') {
    darkModeToggleBtn.textContent = 'Light Mode';

  } else {
    darkModeToggleBtn.textContent = 'Dark Mode';
  }
});


// smooth scrolling GSAP
const lenis = new lenis();

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)