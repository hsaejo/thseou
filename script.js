// Dark/Light Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference in local storage
const currentMode = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentMode);

// Update toggle button text based on theme
toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark-mode');
  }
});

const button = document.getElementById("darkModeToggle");

let isDragging = false;
let offsetX, offsetY;

button.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;

  button.style.cursor = "grabbing"; // Change cursor to grabbing
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    button.style.left = `${e.clientX - offsetX}px`;
    button.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  button.style.cursor = "grab"; // Reset cursor when not dragging
});
