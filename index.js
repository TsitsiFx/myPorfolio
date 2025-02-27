const images = [
  './images/image1.png',
  './images/image2.png',
  './images/image1.png'
];
let currentIndex = 0;
const slideshow = document.querySelector('.slideshow');

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 1000); // Change image every 5 seconds
