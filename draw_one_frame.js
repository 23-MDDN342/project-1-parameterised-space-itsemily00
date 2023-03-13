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
mainRed.setAlpha(180); //https://p5js.org/reference/#/p5.Color/setAlpha
let backupRed = color("#bf0f0b"); //scarlet
backupRed.setAlpha(180);

let noiseRed;
let blockSize = 10;
let minSize = 1;
let maxSize = 100;
let rectX = 0;
let rectY = 0;


fill(mainRed);
noStroke();
rectMode(CENTER);
let scaledSize = map(cur_frac, 0, 1, 0.1, 5);
push();
translate(265, 150);
scale(scaledSize, scaledSize);
rect(0, 0, 130, 100);
pop(); 
blockSize = (blockSize % maxSize) + 1; //chatGPT



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
	horizontal_lines(600, 350, 220);
	vertical_lines(200, 80, 350);
	vertical_lines(450, 200, 300);
	vertical_lines(680, 30, 370);
	pop();

	push();
	strokeWeight(8.5);
	horizontal_lines(330, 200, 200);
	horizontal_lines(450, 310, 170);
	horizontal_lines(150, 400, 180);
	vertical_lines(330, 50, 400);
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

function redBlocks(){
	// let orbSize = width / 20
	// let spacingSize = width / 19;
	// let mainRed = color("#ed1e1a"); // red
	// mainRed.setAlpha(180); //https://p5js.org/reference/#/p5.Color/setAlpha
	// let backupRed = color("#bf0f0b"); //scarlet
	// backupRed.setAlpha(180);
	
	// let noiseRed;
	// let sizeMap;
	// let mainColor = color("#3F292B") // brown
	
	//noiseRed = getNoiseValue(spacingSize*accross,spacingSize*down, 0.8, "noiseRed",0,1, 200 )
	
	
	// for(let across = 1; across < 130; across++){
	// 	noiseRed = getNoiseValue(spacingSize*across, 100, 0.8, "noiseRed",0,1, 200 )
	// 	noiseRedLerp = lerpColor(mainRed,backupRed,noiseRed)  // https://p5js.org/reference/#/p5/lerpColor
	
	// 	fill(noiseRedLerp);
	// 	noStroke();
	// 	rectMode(CENTER);
	// 	rect(200, 100, 130, 100);
	// }

	// let blockSize = 10;
	// let minSize = 1;
	// let maxSize = 100;
	// let rectX = 200;
	// let rectY = 100;

	// fill(mainRed);
	// noStroke();
	// let scaledSize = map(blockSize, minSize, maxSize, 0.1, 5);
	// scale(scaledSize);
	// rect(rectX, rectY, 130, 100);
	// blockSize = (blockSize % maxSize) + 1;

}