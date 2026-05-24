/**
 * main.js — Core site functionality
 * Handles navigation, scroll animations, and intersection observer
 */

/**
 * Initialize the mobile hamburger menu toggle
 */
export function initNavigation() {
  const hamburger = document.querySelector(".nav-hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-links-open");
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-links-open");
      });
    });
  }
}

/**
 * Animate elements when they enter the viewport using IntersectionObserver
 */
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("timeline-item-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => observer.observe(item));
}

/**
 * Highlight active nav link based on current scroll position
 */
export function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("nav-link-active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("nav-link-active");
          }
        });
      }
    });
  });
}
