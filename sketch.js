function setup() {
// this creates a medium/canvas
    createCanvas(600,600);  
    redrawCircle();
}

function draw(){
    textSize(13);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER)
    text("Press the right arrow to reset and make the stroke color blue or left arrow to make the color black",300,550);    
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

function keyPressed(){
     redrawCircle();
    if (keyCode === LEFT_ARROW) {
        stroke("black");
    }
    if (keyCode === RIGHT_ARROW) {
        stroke("blue");
    }
}

function redrawCircle(){
     background("#990000");
// this changes the object's color, outline color, and how thick the outline is
    fill("#e67300");
    stroke("#000000");
    strokeWeight(8);
// this creates an object in the canvas (can be ellipse, circle, quad, rect, etc.)
    circle(300,300,200,20);
    strokeWeight(5);   
}