window.onload = function() {
    var divs = document.querySelectorAll('.move-pic');
  
    function moveDivs() {
      divs.forEach(function(div) {
        var maxWidth = window.innerWidth - div.offsetWidth;
        var maxHeight = window.innerHeight - div.offsetHeight;
        var newX = Math.floor(Math.random() * maxWidth);
        var newY = Math.floor(Math.random() * maxHeight);
        div.style.left = newX + 'px';
        div.style.top = newY + 'px';
      });
    }
    moveDivs();
    setInterval(moveDivs, 1000);
  };