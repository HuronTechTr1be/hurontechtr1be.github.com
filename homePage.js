let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

showItem(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}, 5000);  // Change slide every 5 seconds
