console.log("Teyzix Core Loaded");

// NAV 
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// BUTTON CLICK EFFECT
const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

// SIMPLE SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "#0b0f14";
  } else {
    nav.style.background = "#111826";
  }
});