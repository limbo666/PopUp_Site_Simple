const icons = ['1.png', '2.png', '3.png', '4.png', '5.png'];

function createIcon() {
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.style.backgroundImage = `url(${icons[Math.floor(Math.random() * icons.length)]})`;
  icon.style.left = Math.random() * window.innerWidth + 'px';
  icon.style.top = Math.random() * window.innerHeight + 'px';
  icon.style.transform = 'scale(' + (Math.random() * 2 + 1) + ')';
  document.body.appendChild(icon);
  setTimeout(() => {
    icon.classList.add('sparkle');
    setTimeout(() => {
      icon.remove();
    }, 300);
  }, Math.random() * 3000);
}

setInterval(() => {
  createIcon();
}, 100);

// JavaScript
function adjustPopupSize() {
  const popup = document.querySelector('.popup');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;
  
  // If the popup is wider than the viewport, shrink it
  if (popupWidth > viewportWidth) {
    popup.style.width = viewportWidth + 'px';
  }
  
  // If the popup is taller than the viewport, shrink it
  if (popupHeight > viewportHeight) {
    popup.style.height = viewportHeight + 'px';
  }
  
  // If the popup is too close to the right edge, move it left
  const popupRight = popup.offsetLeft + popupWidth;
  if (popupRight > viewportWidth) {
    popup.style.left = (viewportWidth - popupWidth) + 'px';
  }
  
  // If the popup is too close to the bottom edge, move it up
  const popupBottom = popup.offsetTop + popupHeight;
  if (popupBottom > viewportHeight) {
    popup.style.top = (viewportHeight - popupHeight) + 'px';
  }
}

window.addEventListener('resize', adjustPopupSize);
