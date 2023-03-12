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

function draw_one_frame(){
	let backgroundColor = color("#fffff");
	fill(backgroundColor);
	rect(0, 0, width, height);
//////////SET UP///////////////
	

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
	vertical_lines(450, 200, 300);
	vertical_lines(680, 30, 370);
	pop();

	push();
	strokeWeight(8.5);
	horizontal_lines(330, 200, 200);
	horizontal_lines(150, 400, 180);
	vertical_lines(330, 50, 260);
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



