let wave1 = 0;
let wave2 = 180;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    ghost();
  } else {
    drawSwag(200, 200, 0.4, 200, 200);
  }
}
function drawSwag(x, y, zSize, circleWidth, circleHeight) {
  drawEllipse(x, y, circleWidth, circleHeight, 10, 100, 100);
  drawZ(x, y, zSize, 50, 0, 100);
}

function ghost(x, y, size) {
  translate(x, y);
  scale(size);
  ellipse(200, 200, 250, 300);
  fill(0);
  ellipse(240, 140, 60);
  ellipse(160, 140, 60);
  fill(255);
  ellipse(240, 140, 30);
  ellipse(160, 140, 30);
  push();
  strokeWeight(5);
  noFill();

  arc(280, 220, 60, 100, 0, 180);
  arc(120, 220, 60, 100, wave1, wave2);
  arc(200, 140, 400, 100, 60, 100);
  pop();

  if (mouseIsPressed) {
    wave1 = 180;
    wave2 = 0;
  } else {
    wave1 = 0;
    wave2 = 180;
  }
}
function drawEllipse(x, y, w, h, r, g, b) {
  push();
  fill(r, g, b);
  ellipse(x, y, w, h);
  pop();
}
function drawZ(x, y, size, r, g, b) {
  push();
  fill(r, g, b);
  translate(x, y);
  scale(size);
  //drawing the Z and translating so it starts in the upper left
  translate(-200, -200);
  beginShape();
  vertex(30, 20);
  vertex(350, 20);
  vertex(350, 75);
  vertex(95, 320);
  vertex(350, 320);
  vertex(350, 370);
  vertex(30, 370);
  vertex(30, 320);
  vertex(280, 70);
  vertex(30, 75);
  endShape(CLOSE);
  pop();
}
