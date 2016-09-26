var circlesX = [];
var circlesY = [];
var speedX = [];
var speedY = [];
var directionX = [];
var directionY = [];
var colorH = [];

function setup() {
  createCanvas(600, 600);
  background(0);
}

function mousePressed() {
  circlesX.push(mouseX);
  circlesY.push(mouseY);
  speedX.push(random(4, 6));
  speedY.push(random(4, 6));
  directionX.push(random(-1, 1));
  directionY.push(random(-1, 1));
  colorH.push(random(0, 360));
}

function draw() {
  background(0);
  for (var i = 0; i < circlesX.length; i++) {
    noStroke;
    colorMode(HSB);
    fill(colorH[i], 100, 100);
    ellipse(circlesX[i], circlesY[i], 40, 40);
    circlesX[i] = circlesX[i] + speedX[i] * directionX[i];
    circlesY[i] = circlesY[i] + speedY[i] * directionY[i];
    if (circlesX[i] > 580 || circlesX[i] < 20) {
      directionX[i] = -1 * directionX[i];
    }
    if (circlesY[i] > 580 || circlesY[i] < 20) {
      directionY[i] = -1 * directionY[i];
    }
  }
}
