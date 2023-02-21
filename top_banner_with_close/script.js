

const banner = document.querySelector('.top-banner');
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  banner.classList.add('closed');
});
