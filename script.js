
window.onload = function () {
  let divs = document.querySelectorAll('.move-pic');
  let container = document.querySelector('.stars-container');
  function moveDivs() {
    divs.forEach(function (div) {
      let containerWidth = container.offsetWidth;
      let containerHeight = container.offsetHeight
      let maxWidth = containerWidth - div.offsetWidth;
      let maxHeight = containerHeight - div.offsetHeight;
      let newX = Math.floor(Math.random() * maxWidth);
      let newY = Math.floor(Math.random() * maxHeight);
      div.style.left = newX + 'px';
      div.style.top = newY + 'px';
    });
  }
  moveDivs();
  setInterval(moveDivs, 2000);
};