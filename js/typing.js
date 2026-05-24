/**
 * typing.js — Typing animation effect for hero section
 * Cycles through an array of roles with a typewriter effect.
 */

/**
 * Initialize the typing animation on a target element.
 * @param {string} selector - CSS selector for the target element
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} typeSpeed - Milliseconds per character when typing
 * @param {number} deleteSpeed - Milliseconds per character when deleting
 * @param {number} pauseTime - Milliseconds to pause after typing a word
 */
export function initTypingAnimation(
  selector,
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
) {
  const element = document.querySelector(selector);
  if (!element) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      element.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  tick();
}
