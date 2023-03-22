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
let mainRed = color("#de2100"); // red
let mainYellow = color("#ffbf1c"); //yellow
let mainBlue = color("#3733a1"); //blue

let scaledSize;
let scaledSize2;
//movement 1
if(cur_frac <= 0.5){
 scaledSize = map(cur_frac, 0, 0.5, 1.1, 1.25); //color block expands
} else {
 scaledSize = map(cur_frac, 0.5, 1, 1.25, 1.1); //color block shrinks
}
//movement 2
   if(cur_frac <= 0.5){
	scaledSize2 = map(cur_frac, 0, 0.5, 1.13, 1); 
   } else {
	scaledSize2 = map(cur_frac, 0.5, 1, 1, 1.13); 
   }
//movement 3
if(cur_frac <= 0.5){
	scaledSize3 = map(cur_frac, 0, 0.5, 1.1, 1); 
   } else {
	scaledSize3 = map(cur_frac, 0.5, 1, 1, 1.1); 
   }


/////DRAW THE LINES/////
	push();
	strokeWeight(4);
	horizontal_lines(820, 450, 70);
	horizontal_lines(760, 124, 40);
	horizontal_lines(100, 100, 100);
	horizontal_lines(76.5, 368, 140)

	vertical_lines(760, 60, 70);
	vertical_lines(200, 70, 350-289.8);
	vertical_lines(820, 450, 30);
	vertical_lines(139, 360, 75);
	pop();

    push();
	strokeWeight(6);
	vertical_lines(880, 430, 40);
	pop();
 

/////DRAW THE COLOR BLOCKS/////
///Static blocks
    push(); // blue above long balck bar on lower half
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(553, 335); 
	rect(0, 0, 60, 100);
	pop(); 

	push(); //long small black on top left
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(265, 100);
	rect(0, 0, 70, 30);
	pop();

	push(); //red on top left
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

	push(); // yellow on top right
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(720, 144); 
	scale(1);
	rect(0, 0, 80, 40);
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

	push(); // tall blue on bottom
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(374, 420); 
	rect(0, 0, 20, 150);
	pop(); 

	push(); //static black 
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(350, 150);
	rect(0, 0, 40, 70);
	pop();

	push(); //black on the right bottom
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(615, 393);
	rect(0, 0, 160, 20);
	pop();

	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(395, 150);
	rect(0, 0, 85, 70);
	pop();

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(463, 173);
	rect(0, 0, 50);
	pop();

	push();
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(475, 133);
	rect(0, 0, 76, 36);
	pop();

	push(); //static black block in mid
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(450, 257);
	rect(0, 0, 185, 60);
	pop();

	push(); // small rect yellow in lower mid
	fill(mainYellow);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(510, 315);
	rect(0, 0, 25, 60);
	pop();

	push(); //black below long yellow on lower left
	fill(0);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(324, 373);
	rect(0, 0, 80, 10);
	pop();

	push(); //small red next to tall blue bar
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(402, 363);
	rect(0, 0, 36);
	pop();

	push(); //long yellow on lower left
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(251, 350);
	rect(0, 0, 225, 35);
	pop();

	push(); //small red on bottom right
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(347, 322);
	rect(0, 0, 50, 30);
	pop();

	push(); //static yellow above very tall blue
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(400, 300);
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

	push(); // yellow lower right
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(613, 365); 
	rect(0, 0, 60, 40);
	pop(); 
	
	push();
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(740, 374); 
	rect(0, 0, 90, 90);
	pop(); 

	push();
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(581.4, 253);
	scale(1.1);
	rect(0, 0, 75, 58);
	pop();

	push(); // blue below white ine th mid
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(466, 280); 
	scale(1.2);
	rect(0, 0, 50, 90);
	pop(); 

	push(); // white in the mid
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(490.5, 220); 
	rect(0, 0, 83*1.2, 39*1.2);
	pop(); 

	push(); // yellow big one in the middle
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(600, 186); 
	rect(0, 0, 120, 85);
	pop(); 

	push(); // tall red on the top
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(670, 131); 
	rect(0, 0, 20, 200);
	pop(); 

	push(); // white above small red
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(344, 285); 
	rect(0, 0, 40, 50);
	pop(); 

	push(); //very small red next to white under
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(735, 294);
	rect(0, 0, 35, 30);
	pop();

	push(); //vertical red
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(633, 257.5);
	rect(0, 0, 22, 55);
	pop();

	push(); // yellow at bottom
	fill(mainYellow)
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(615, 440); 
	//scale(scaledSize2);
	rect(0, 0, 55, 80);
	pop(); 
	
///////////////////////////////////////////////
///COLOR BLOCKS WITH MOVEMENTS

	push(); // red above long balck
	fill(mainRed);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(660, 367);
	scale(scaledSize3);
	rect(0, 0, 80, 60);
	pop();

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

	push(); // red big one in the middle slightly left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(389, 219); 
	scale(scaledSize2);
	rect(0, 0, 119, 79);
	pop(); 
	
	push(); 
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(457, 330); 
	scale(scaledSize2);
	rect(0, 0, 79, 49);
	pop(); 

	push(); // red bottom middle
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(510, 370); 
	scale(scaledSize);
	rect(0, 0, 50, 65);
	pop(); 
	
	push(); // big red on bottom left corner
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(244, 290); 
	scale(scaledSize);
	rect(0, 0, 87, 78);
	pop(); 

	push(); //white below vertical red bar
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER);
	translate(704, 254);
	rect(0, 0, 120, 50);
	pop();
	
	push(); //the 1st yellow on the top row
	fill(mainYellow);
	stroke(0);
   strokeWeight(4);
	rectMode(CENTER); 
	translate(369, 100);
	scale(scaledSize2);
	rect(0, 0, 80, 35);
	pop();

	push(); //long blue on very right
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(790, 170);
	scale(scaledSize3);
	rect(0, 0, 120, 25);
	pop();

	push(); //the squred blue next to the tall red bar
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(638, 140);
	scale(scaledSize3);
	rect(0, 0, 40);
	pop();

	push(); //the 4th blue on the top row
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(530, 135);
	scale(scaledSize2);
	rect(0, 0, 40, 140);
	pop();

	push();
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(558, 205); 
	scale(scaledSize3);
	rect(0, 0, 50);
	pop(); 

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(680, 304);
	scale(scaledSize);
	rect(0, 0, 80, 70);
	pop();

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(540, 290);
	scale(scaledSize3);
	rect(0, 0, 45);
	pop();
	
	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(310, 300);
	scale(scaledSize2);
	rect(0, 0, 38, 90);
	pop();


////small decors
	push(); 
	fill(mainRed);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(760, 230); 
	scale(scaledSize2);
	rect(0, 0, 30, 30);
	pop(); 

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(3);
	rectMode(CENTER); 
	translate(683, 120); 
	scale(scaledSize);
	rect(0, 0, 15);
	pop(); 

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(820, 410); 
	scale(scaledSize2);
	rect(0, 0, 30);
	pop(); 

	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(200, 145); 
	scale(scaledSize2);
	rect(0, 0, 20);
	pop(); 

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(140, 335); 
	scale(scaledSize);
	rect(0, 0, 25);
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
