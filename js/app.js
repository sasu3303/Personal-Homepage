/**
 * app.js — Application entry point
 * Imports and initializes all ES6 modules.
 */

import { initNavigation, initActiveNavHighlight } from "./main.js";
import { initTerminal } from "./terminal.js";

// Initialize core navigation on all pages
initNavigation();

initActiveNavHighlight();

// Initialize terminal if present
const terminalExists = document.querySelector(".terminal");
if (terminalExists) {
  initTerminal();
}
