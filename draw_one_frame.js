/* 
   getNoiseValue arguments:
     x: current grid location across
     y: current grid location down
     loop: can be any value from 0-1 and will loop
     name: the "name" of the lookup table. probably change this each time.
     min/max: the minimum and maximum of the value to return
     smoothness: 1 means elements are not related. larger numbers cause groupings.
*/

function draw_one_frame(cur_frac){
	let backgroundColor = color("#fffff");
	fill(backgroundColor);
	rect(0, 0, width, height);
///////////////SET UP///////////////


/////DRAW THE COLOR BLOCKS/////
let mainRed = color("#e03015"); // red

let backupRed = color("#bf0f0b"); //scarlet


let mainYellow = color("#e6b628"); //yellow
// let mainBlue = color("#3679d1"); //blue
let mainBlue = color("#3733a1"); //blue
// mainRed.setAlpha(210); //https://p5js.org/reference/#/p5.Color/setAlpha
// mainYellow.setAlpha(210);
// mainBlue.setAlpha(210);



let scaledSize;
let scaledSize2;
let scaledSize3;
//movement 1
if(cur_frac <= 0.5){
 scaledSize = map(cur_frac, 0, 0.5, 1.1, 1.25); //color block expands
} else {
 scaledSize = map(cur_frac, 0.5, 1, 1.25, 1.1); //color block shrinks
}
//movement 2
   if(cur_frac <= 0.5){
	scaledSize2 = map(cur_frac, 0, 0.5, 1.13, 1); //color block expands
   } else {
	scaledSize2 = map(cur_frac, 0.5, 1, 1, 1.13); //color block shrinks
   }


/////DRAW THE GRID/////
	// push();
	// strokeWeight(3);
	// horizontal_lines(80, 250, 250);
	// horizontal_lines(450, 400, 450);
	// vertical_lines(800, 300, 150);
	// pop();

	push();
	strokeWeight(4);
	horizontal_lines(150, 100, 50);
	// //horizontal_lines(200, 150, 130);
	// horizontal_lines(500, 150, 52)
	// horizontal_lines(150, 180, 530);
	// horizontal_lines(530, 198.3, 360);
	// horizontal_lines(450, 240, 80);
	// horizontal_lines(330, 280, 120);
	// horizontal_lines(170, 330, 120);
	// horizontal_lines(200, 360, 130);
	// horizontal_lines(450, 340, 380); //中间大长方形的水平分割线
	// horizontal_lines(620, 370, 60);
	vertical_lines(200, 70, 350-289.8);
	// vertical_lines(240, 180, 70);
	// vertical_lines(290, 250, 110);
	// vertical_lines(450, 200, 300);
	// vertical_lines(500, 100, 100);
	// vertical_lines(550, 100, 80);
	// vertical_lines(590, 340, 120);//中间的大长方形垂直分割
	// vertical_lines(640, 370, 30);
	// vertical_lines(621.7, 200, 110);
	// vertical_lines(680, 30, 370);
	// vertical_lines(870, 380, 50);
	pop();

	// push();
	// strokeWeight(8);
	// horizontal_lines(330, 200, 200);
	// horizontal_lines(450, 310, 170);

	// vertical_lines(330, 50, 400);
	// vertical_lines(530, 195.9, 110);
	// vertical_lines(620, 306, 95);
	// vertical_lines(650, 60, 120);
	// pop();
 

/////DRAW THE COLOR BLOCKS/////
	push(); //static black block small
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(265, 100);
	rect(0, 0, 70, 30);
	pop();

	push(); // red on top left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(265-20, 125-0.1); 
	scale(1);
	rect(0, 0, 130-40, 50.2);
	pop(); 

	push(); // blue next to red on top left
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(310-1, 125-0.2-22.5); 
	scale(1);
	rect(0, 0, 40, 50.2+45);
	pop(); 

	push(); // yellow on the left middle
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(290, 219); 
	rect(0, 0, 119, 79);
	pop(); 

	


	push(); //static black 
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(350, 150);
	//scale(scaledSize);
	rect(0, 0, 40, 70);
	pop();

	push(); //第一行第二个蓝色
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(395, 150);
	//scale(scaledSize);
	rect(0, 0, 85, 70);
	pop();

	push(); //static black block
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(0, 383);
	//scale(scaledSize);
	rect(0, 0, 165, 15);
	pop();

	push(); // static blue on the very left small small!
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(185, 390); 
	scale(1.1);
	rect(0, 0, 15, 45);
	pop(); 

	

	push(); //static yellow
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(240, 350);
	rect(0, 0, 180, 35);
	pop();

	

	push(); //static yellow
	fill(mainYellow);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(400, 300);
	//scale(scaledSize);
	rect(0, 0, 72, 90);
	pop();

	

	push(); // white bottom right
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(730, 425); 
	rect(0, 0, 180, 50);
	pop(); 
	
	push(); // static blue
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(740, 354); 
	//scale(scaledSize2);
	rect(0, 0, 90, 90);
	pop(); 

	push(); // white in th emid
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(490.5, 220); 
	scale(1.2);
	rect(0, 0, 83, 39);
	pop(); 

	push(); //squre white
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(354, 285); 
	rect(0, 0, 50, 50);
	pop(); 

	push(); //vertical red
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(636, 233);
	rect(0, 0, 26, 104);
	pop();

	push();
	fill(mainBlue);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(525.5+74, 165);
	scale(1.1);
	rect(0, 0, 48.5+42, 27);
	pop();

///////////////////////////////////////////////
///COLOR BLOCKS WITH MOVEMENTS
	push(); // white at bottom left
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(225, 400); 
	scale(scaledSize2);
	rect(0, 0, 65, 65);
	pop(); 

	push(); //white under red on top left
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(251, 165); 
	scale(scaledSize);
	rect(0, 0, 145, 30);
	pop(); 
	


	push(); // red big one in the middle
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(389, 219); 
	scale(scaledSize2);
	rect(0, 0, 119, 79);
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

	
	
	push(); //第一行第一个黄色
	fill(mainYellow);
	stroke(0);
   strokeWeight(4);
	rectMode(CENTER); 
	translate(369, 100);
	scale(scaledSize2);
	rect(0, 0, 80, 35);
	pop();



	push(); //第一行第二个黄色
	fill(mainYellow);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(525.5, 120);
	scale(scaledSize2);
	rect(0, 0, 45, 120);
	pop();


	push(); //右边蓝和红之上的黄黄黄黄
	fill(mainYellow);
	//noStroke();
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(675, 304);
	scale(scaledSize);
	rect(0, 0, 60, 70);
	pop();

	

	push(); //最左边蓝
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(310, 300);
	scale(scaledSize2);
	rect(0, 0, 38, 90);
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
