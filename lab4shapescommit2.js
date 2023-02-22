function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTriangle(50, 50, 50, 200, 200, 50, 300, 0, 300);
  drawSwag(200, 200, 0.4, 200, 200);
}
function drawSwag(x, y, zSize, circleWidth, circleHeight) {
  drawEllipse(x, y, circleWidth, circleHeight, 0, 100, 100);
  drawZ(x, y, zSize, 50, 0, 100);
}

function drawTriangle(x1, y1, x2, y2, x3, y3, r, g, b) {
  fill(r, g, b);
  triangle(x1, y1, x2, y2, x3, y3);
}
function drawEllipse(x, y, w, h, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, w, h);
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
