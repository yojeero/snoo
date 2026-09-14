
// ScrollReveall
window.sr = ScrollReveal();sr.reveal('.reveal');

// Nav
// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.reveal');

// Nav
const nav = document.getElementById("nav-content");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close-nav");
const overlay = document.getElementById("nav-overlay");

closeBtn.classList.add("hidden");

function openNav() {
  nav.classList.add("open");
  overlay.classList.add("active");
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeNav() {
  nav.classList.remove("open");
  overlay.classList.remove("active");
  menuBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  nav.style.transform = "";
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openNav();
});

closeBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains("open")) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    closeNav();
  }
});

document.querySelectorAll("#nav-content a").forEach(link => {
  link.addEventListener("click", closeNav);
});

let startX = 0;
let currentX = 0;
let isDragging = false;
let isOpening = false;

const EDGE_SIZE = 30;
const THRESHOLD = 100;

document.addEventListener("touchstart", (e) => {
  const touchX = e.touches[0].clientX;

  isOpening = false;

  if (!nav.classList.contains("open")) {
    if (touchX < EDGE_SIZE) {
      isDragging = true;
      startX = touchX;
    }
  } else {
    isDragging = true;
    startX = touchX;
  }
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  if (!nav.classList.contains("open")) {
    if (diff > 0) {
      isOpening = true;

      nav.classList.add("open");
      overlay.classList.add("active");

      nav.style.transform = `translateX(${diff - window.innerWidth}px)`;
    }
  }

  else {
    if (diff < 0) {
      nav.style.transform = `translateX(${diff}px)`;
    }
  }
});

document.addEventListener("touchend", () => {
  if (!isDragging) return;

  isDragging = false;

  const diff = currentX - startX;

  if (isOpening) {
    diff > THRESHOLD ? openNav() : closeNav();
  }

  else if (nav.classList.contains("open")) {
    diff < -THRESHOLD ? closeNav() : openNav();
  }

  isOpening = false;
  nav.style.transform = "";
});