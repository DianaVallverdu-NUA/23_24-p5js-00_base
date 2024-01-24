# Introduction to p5

"p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone." - [p5.js Documentation](https://p5js.org/)

## p5.js Basics

p5.js can be used online or locally in a computer.

As a first step, go to the [p5 online editor](https://editor.p5js.org/). That allows us to create drawings and shapes online. It's a great place to test code and see what p5.js is all about.

When you open the editor, this is the code that you will see:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

Press the play button at the top to see this canvas appear on the right hand side. To understand the code:

- `setup` and `draw` are predefined functions that p5.js understands. They are executed automatically by the engine and, thus, we define them but never call them.

- `createCanvas(400, 400)` - creates a canvas of 400 pixels by 400 pixels.

- `background(220)` - paints the background of the canvas in the color 220 of the grayscale. It's equivalent as setting the rgb code to (220, 220, 220). Check [this page](https://www.w3schools.com/colors/colors_shades.asp) for more information.

## Drawing in the canvas

Getting aqcuainted with `p5.js` can be a bit daunting at first, but once you know the necessary tricks it becomes easy!

Write the following code inside the `draw` function:

```javascript
const myColor = color(255, 0, 0);

fill(myColor);

circle(200, 200, 50);
```
<details><summary>Solution</summary>

Your code should now look like this:
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  const myColour = color(255, 0, 0);

  fill(myColour);

  circle(200, 200, 50);
}
```
</details>

A red dot should appear at the centre of the canvas. This code is doing the following:
- `color(255, 0, 0)` - is creating an object of type color with the RGB code of (255, 0, 0), which corresponds to red.
- `myColosr = color(255, 0, 0)` - is saving this object that defines the color red into a variable of name `myColor`.
- `fill(myColosr)` - sets the 'brush color' to `myColor`. This works a bit like paint. When I subsequently draw anything, it will come up in the color stored in `myColor`.
- `circle(200, 200, 50)` - paints a circle with coordinate centre as `(200, 200)` - which is the centre of the canvas - and diameter `50` pixels.
