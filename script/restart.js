var canvas = document.getElementById('canvas'); // 
var ctx = canvas.getContext('2d'); //
var start = document.getElementById('start');
var score = 0;
var loss = false;
startGame()


// Redemarre un nouveau 2048
start.onclick = function (restart) {
  canvas.style.opacity = '1';
    canvasClean();
    startGame();
  }

// NETTOIE LE CANVAS
function canvasClean() {
  ctx.clearRect(0, 0, 400, 400);
    score;
}