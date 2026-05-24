/**
 * app.js — Application entry point
 * Imports and initializes all ES6 modules.
 */

import { initNavigation, initScrollAnimations, initActiveNavHighlight } from "./main.js";
import { initTerminal } from "./terminal.js";
import { initTypingAnimation } from "./typing.js";

// Initialize core navigation on all pages
initNavigation();

// Initialize page-specific modules
const heroTypedEl = document.querySelector(".hero-typed-text");
if (heroTypedEl) {
  initTypingAnimation(".hero-typed-text", [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Salesforce Specialist",
    "CS Graduate Student",
    "Problem Solver",
  ]);
}

// Initialize scroll animations if timeline exists
const timelineExists = document.querySelector(".timeline");
if (timelineExists) {
  initScrollAnimations();
  initActiveNavHighlight();
}

// Initialize terminal if present
const terminalExists = document.querySelector(".terminal");
if (terminalExists) {
  initTerminal();
}
