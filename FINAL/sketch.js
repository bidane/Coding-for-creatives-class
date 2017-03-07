var x = 200;
var y = 150;
var xspeed = 15;
var yspeed = 5;
// balls
numBalls = 10;
var balls = new Array(10);

function setup () {
	createCanvas(1200, 600);
	
	for(i= 0 ; i < numBalls ; i++){
	   balls[i] = new Ball(i*1, i*2);
	}
}

function draw () {
	background(255, 255, 255); 
	for(i= 0 ; i < numBalls ; i++){
	   balls[i].display();
	   balls[i].move();
	   balls[i].bounce();
	}
}

function Ball(x, y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		stroke(50);
		strokeWeight(100);
		fill(this.x, this.y, 200, 170, 250);
		ellipse(this.x, this.y, 20, 20);
	}
	
	this.move = function() {
		this.x = this.x + xspeed 
		this.y = this.y + yspeed 
	}
	
	this.bounce = function() {
		if (this.x > width || this.x < 0){
			xspeed = xspeed *-1;
		}
		if (this.y > height || this.y < 0){
			yspeed = yspeed *-1;
		}
	}
}