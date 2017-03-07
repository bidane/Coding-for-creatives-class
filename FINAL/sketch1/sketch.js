var x = 200;
var y = 150;
var xspeed = 15;
var yspeed = 5;
// balls
numBalls = 50;
var balls = [];

function setup () {
	createCanvas(windowWidth, windowHeight);
	
	for(i= 0 ; i < numBalls ; i++){
		for(j= 0 ; j < numBalls ; j++){
			// creating new Ball objects
	   		balls.push( new Ball(i*50, j*50) );

		}
	}
}

}

function draw () {
	background(255, 255, 255); 
	for(i= 0 ; i < balls.length; i++){
	   balls[i].display();
	   //balls[i].move();
	   //balls[i].bounce();
	}
}

// Ball object constructor
function Ball(x, y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		stroke(1);
		strokeWeight(0);
		fill(this.x, this.y, 200, 170, 250);
		ellipse(this.x, this.y, 20, 20);
	}

	this.click = function() {

	}
	
	// this.move = function() {
	// 	this.x = this.x + xspeed 
	// 	this.y = this.y + yspeed 
	// }
	
	// this.bounce = function() {
	// 	if (this.x > width || this.x < 0){
	// 		xspeed = xspeed *-1;
	// 	}
	// 	if (this.y > height || this.y < 0){
	// 		yspeed = yspeed *-1;
	// 	}
	// }
}