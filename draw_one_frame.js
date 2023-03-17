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

let backupRed = color("#bf0f0b"); //scarlet


let mainYellow = color("#e8bb25"); //yellow
let mainBlue = color("#252ce8"); //blue
// mainRed.setAlpha(200); //https://p5js.org/reference/#/p5.Color/setAlpha
// mainYellow.setAlpha(200);
// mainBlue.setAlpha(200);





let scaledSize;
let scaledSize2;
if(cur_frac <= 0.5){
 scaledSize = map(cur_frac, 0, 0.5, 1, 1.2); //color block expands
} else {
 scaledSize = map(cur_frac, 0.5, 1, 1.2, 1); //color block shrinks
}
//different movement
if(cur_frac <= 0.6 && cur_frac >= 0.3){
	scaledSize2 = map(cur_frac, 0.3, 0.6, 1, 1.2); //color block expands
   } if(cur_frac > 0.6) {
	scaledSize2 = map(cur_frac, 0.6, 1, 1.2, 1); //color block shrinks
   }

// push();
// fill(mainRed);
// noStroke();
// rectMode(CENTER); 
// translate(265, 140); //translate the rect to the grid
// scale(scaledSize);
// rect(0, 0, 130, 80);
// pop(); 

// push();
// fill(mainRed);
// stroke(0);
// strokeWeight(4);
// rectMode(CENTER); 
// translate(660, 384);
// scale(scaledSize);
// rect(0, 0, 40, 30);
// pop();

// push();
// fill(mainYellow);
// noStroke();
// rectMode(CENTER); 
// translate(523, 125);
// scale(scaledSize);
// rect(0, 0, 48, 45);
// pop();


 

/////DRAW THE GRID/////
	push();
	strokeWeight(3);
	horizontal_lines(80, 250, 250);
	horizontal_lines(450, 400, 450);
	vertical_lines(800, 300, 150);
	pop();

	push();
	strokeWeight(4);
	horizontal_lines(200, 100, 540);
	horizontal_lines(200, 150, 130);
	horizontal_lines(500, 150, 52)
	horizontal_lines(150, 180, 530);
	horizontal_lines(530, 198.3, 360);
	horizontal_lines(450, 240, 80);
	horizontal_lines(330, 280, 120);
	horizontal_lines(170, 330, 120);
	horizontal_lines(200, 360, 130);
	horizontal_lines(450, 340, 380); //中间大长方形的水平分割线
	horizontal_lines(620, 370, 60);
	vertical_lines(200, 80, 350);
	vertical_lines(240, 180, 70);
	vertical_lines(290, 250, 110);
	vertical_lines(450, 200, 300);
	vertical_lines(500, 100, 100);
	vertical_lines(550, 100, 80);
	vertical_lines(590, 340, 120);//中间的大长方形垂直分割
	vertical_lines(640, 370, 30);
	vertical_lines(621.7, 200, 110);
	vertical_lines(680, 30, 370);
	vertical_lines(870, 380, 50);
	pop();

	push();
	strokeWeight(8);
	horizontal_lines(330, 200, 200);
	horizontal_lines(450, 310, 170);

	vertical_lines(330, 50, 400);
	vertical_lines(530, 195.9, 110);
	vertical_lines(620, 306, 95);
	vertical_lines(650, 60, 120);
	pop();



/////DRAW THE COLOR BLOCKS/////
	push(); // red on top left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(265, 125); 
	scale(scaledSize);
	rect(0, 0, 130, 53.5);
	pop(); 
	
	push(); //red on the right bottom
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(660, 384);
	scale(scaledSize);
	rect(0, 0, 40, 30);
	pop();
	
	push(); //yellow horizontal to the top left red
	fill(mainYellow);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(525.5, 125);
	scale(scaledSize2);
	rect(0, 0, 46.5, 46);
	pop();

	push(); //yellow on the very left
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(221, 215);
	scale(scaledSize);
	rect(0, 0, 41, 70);
	pop();

	push(); // red next to blue
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(244, 290); 
	scale(scaledSize);
	rect(0, 0, 87, 78);
	pop(); 
	
	push();
	fill(mainBlue);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(525.5, 165);
	scale(scaledSize);
	rect(0, 0, 46.5, 30);
	pop();

	push(); //static black block
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(631, 383);
	//scale(scaledSize);
	rect(0, 0, 15, 31);
	pop();

	push();
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(310, 305);
	scale(scaledSize2);
	rect(0, 0, 38, 110);
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
