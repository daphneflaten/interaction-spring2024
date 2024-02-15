const floatingButton = document.getElementById('floatingButton');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Move button smoothly
function floatButton() {
  const randomX = Math.random() * (screenWidth - floatingButton.offsetWidth);
  const randomY = Math.random() * (screenHeight - floatingButton.offsetHeight);

  floatingButton.style.left = randomX + 'px';
  floatingButton.style.top = randomY + 'px';
}

// Move button periodically
setInterval(floatButton, 2000); // Adjust the interval as needed
