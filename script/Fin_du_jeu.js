var canvas = document.getElementById('canvas'); // 
var ctx = canvas.getContext('2d'); //
var loss = false;


function finishGame() {

 if(loss === false) { 
  canvas.style.opacity = '0.5';
  } 
}