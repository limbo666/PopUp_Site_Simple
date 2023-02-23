// steady color
/*
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.transform = "scale(" + (Math.random() * 2.5 + 0.5) + ")";
  document.body.appendChild(star);
  setTimeout(() => {
    star.classList.add("sparkle");
    setTimeout(() => {
      star.remove();
    }, 300);
  }, Math.random() * 3000);
}
*/

// random color
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.transform = "scale(" + (Math.random() * 2 + 1) + ")";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  star.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.body.appendChild(star);
  setTimeout(() => {
    star.classList.add("sparkle");
    setTimeout(() => {
      star.remove();
    }, 300);
  }, Math.random() * 3000);
}


setInterval(() => {
  createStar();
}, 25);
