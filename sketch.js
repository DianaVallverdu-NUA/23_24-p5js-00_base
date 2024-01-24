//set size to 800
const CANVAS_SIZE = 800;

function setup() {
  // create a canvas of size CANVAS_SIZE by CANVAS_SIZE
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);

  // set up background to greyscale 220
  background(220);

  const colorOne = color(252, 186, 3);

  fill(colorOne);

  rect(500, 23, 200, 100);

  const colorTwo = color(252, 90, 3);

  fill(colorTwo);

  circle(100, 100, 50);

  const colorThree = color(10, 200, 30);

  fill(colorThree);

  ellipse(400, 700, 50, 120);
}
