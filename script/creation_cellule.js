// CREATION ET STYLE DES CARRES 

var canvas = document.getElementById('canvas'); // 
var ctx = canvas.getContext('2d'); //
var size = 4;
var width = canvas.width / size - 6;
var cells = [];//  
var fontSize; //



function cell(row, coll) {
  // Affiche la valeur de base dans les carrés
  this.value = 0; 

  //Crée un padding dans les colonnes
  this.x = coll * width + 4.8 * (coll + 1);

  //crée un padding dans les lignes
  this.y = row * width + 5.6 * (row + 1);
}


// Créer les cellules
function createCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells[i] = [];
    for(j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}

// 

function drawCell(cell) {
  // Crée un chemin
  ctx.beginPath();
  // Crée un rectangle 
  ctx.rect(cell.x, cell.y, width, width);
  switch (cell.value){
    // Donne une couleur a chaque chiffre 
    case 0 : ctx.fillStyle = '#E3D7CC'; break;
    case 2 : ctx.fillStyle = '#30FF00'; break;
    case 4 : ctx.fillStyle = '#0CBDE8'; break;
    case 8 : ctx.fillStyle = '#FFDF69'; break;
    case 16 : ctx.fillStyle = '#FF4DDB'; break;
    case 32 : ctx.fillStyle = '#E89C1E'; break;
    case 64 : ctx.fillStyle = '#E84005'; break;
    case 128 : ctx.fillStyle = '#868EFF'; break;
    case 256 : ctx.fillStyle = '#FFAFF0'; break;
    case 512 : ctx.fillStyle = '#53FF7C'; break;
    case 1024 : ctx.fillStyle = '#0B5F00'; break;
    case 2048 : ctx.fillStyle = '#651917'; break;
    case 4096 : ctx.fillStyle = '#ffbf00'; break;
    default : ctx.fillStyle = '#ff0080';
  }
  // Donne du style au rectangle, ecriture,police, couleur...
  ctx.fill();
  if (cell.value) {
    fontSize = width / 2;
    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    // center le chiffre au milieux du carré
    ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2 + width/7);
  }
}

function drawAllCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell(cells[i][j]);
    }
  }
}

function pasteNewCell() {
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells[i][j].value) {
        countFree++;
      }
    }
  }
  if(!countFree) {
    finishGame();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells[row][coll].value) {
      cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      drawAllCells();
      return;
    }
  }
}