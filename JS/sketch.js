/*
 * @name Acceleration Ball Bounce
 * @description Move an ellipse around based on accelerationX and accelerationY values, and bounces when touch the edge of the canvas.
 */

// Position Variables
var x = 200;
var y = 200;
 
// Speed - Velocity
var vx = 500;
var vy = 500;
 
// Acceleration
var ax = 3;
var ay = 3;
 
var vMultiplier = 0.7;
var bMultiplier = 0.7;

function setup() {
    createCanvas(600, 500);
    fill(0);
}

function draw() {
    background(255,218);
    ballMove();
    ellipse(x, y, 80, 30);
  ellipse(y, x, 80, 30);
  triangle(y,x,x,y,y,x);
  triangle(x,y,50,0,30,50);
  
  c = color(255); // Update 'c' with grayscale value
fill(c); // Use updated 'c' as fill color
}

function ballMove() {

	ax = accelerationX;
	ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

