// Loader
window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

// Smooth Scroll
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Reveal
const sections = document.querySelectorAll(".section");

const revealSections = () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections();

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.onclick = () => {
  navMenu.classList.toggle("active");
};

// Dark Mode
const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// Active Navbar
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
