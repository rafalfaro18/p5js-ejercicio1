var col=0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
  //background
  background(col);
  //ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}