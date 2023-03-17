/* 
   getNoiseValue arguments:
     x: current grid location across
     y: current grid location down
     loop: can be any value from 0-1 and will loop
     name: the "name" of the lookup table. probably change this each time.
     min/max: the minimum and maximum of the value to return
     smoothness: 1 means elements are not related. larger numbers cause groupings.
*/
let lineX1 = 200;
let lineY1 = 200;
let lineY2 = 400;
let lineLength = 400;
//let lineX2 = lineX1+frameCount*5;


function draw_one_frame(cur_frac){
	let backgroundColor = color("#fffff");
	fill(backgroundColor);
	rect(0, 0, width, height);
///////////////SET UP///////////////


/////DRAW THE COLOR BLOCKS/////
let mainRed = color("#ed1e1a"); // red
mainRed.setAlpha(220); //https://p5js.org/reference/#/p5.Color/setAlpha
let backupRed = color("#bf0f0b"); //scarlet
backupRed.setAlpha(180);

let mainYellow = color("#e8bb25"); //yellow
let mainBlue = color("#252ce8"); //blue

let noiseRed;
let blockSize = 10;
let minSize = 1;
//let maxSize = 10;
let rectX = 0;
let rectY = 0;





let scaledSize;

if(cur_frac <= 0.5){
 scaledSize = map(cur_frac, 0, 0.5, 1, 1.5); //color block expands
} else {
 scaledSize = map(cur_frac, 0.5, 1, 1.5, 1); //color block shrinks
}

push();
fill(mainRed);
noStroke();
rectMode(CENTER); 
translate(265, 140); //translate the rect to the grid
scale(scaledSize);
rect(0, 0, 130, 80);
pop(); 

push();
fill(mainRed);
noStroke();
rectMode(CENTER); 
translate(660, 384);
scale(scaledSize);
rect(0, 0, 40, 30);
pop();

push();
fill(mainYellow);
noStroke();
rectMode(CENTER); 
translate(523, 125);
scale(scaledSize);
rect(0, 0, 48, 45);
pop();


 

/////DRAW THE GRID/////
	push();
	strokeWeight(3);
	horizontal_lines(80, 250, 250);
	horizontal_lines(450, 400, 450);
	vertical_lines(800, 300, 150);
	pop();

	push();
	strokeWeight(5);
	horizontal_lines(200, 100, 500);
	horizontal_lines(500, 150, 300);
	horizontal_lines(150, 180, 180);
	horizontal_lines(330, 280, 120);
	horizontal_lines(170, 330, 120);
	horizontal_lines(200, 360, 130);
	horizontal_lines(620, 370, 60);
	vertical_lines(200, 80, 350);
	vertical_lines(240, 180, 70);
	vertical_lines(290, 250, 110);
	vertical_lines(450, 200, 300);
	vertical_lines(500, 100, 100);
	vertical_lines(550, 100, 50);
	vertical_lines(640, 370, 30);
	vertical_lines(680, 30, 370);
	vertical_lines(870, 380, 50);
	pop();

	push();
	strokeWeight(8.5);
	horizontal_lines(330, 200, 200);
	horizontal_lines(450, 310, 170);
	//horizontal_lines(150, 400, 180);

	vertical_lines(330, 50, 400);
	vertical_lines(530, 195.8, 110);
	vertical_lines(620, 306, 95);
	pop();




}

function horizontal_lines(lineX1, lineY1, lineLength){
	stroke(0);
	strokeCap(SQUARE); //https://p5js.org/reference/#/p5/strokeCap
	line(lineX1, lineY1, lineX1+lineLength, lineY1);
}

function vertical_lines(lineX1, lineY1, lineLength){
	stroke(0);
	strokeCap(SQUARE);
	line(lineX1, lineY1, lineX1, lineY1+lineLength);
}
