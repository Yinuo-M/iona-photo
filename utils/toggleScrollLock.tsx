// Prevent body from scrolling when a modal is open
export function toggleScrollLock() {
  document.body.classList.toggle('scroll-lock');
}

export function removeScrollLock() {
  document.body.classList.remove('scroll-lock');
}
