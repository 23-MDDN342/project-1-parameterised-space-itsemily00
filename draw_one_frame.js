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
	horizontal_lines(width / 1.176, height / 1.19, width / 12);
	horizontal_lines(width / 1.27, height / 4.32, width / 24.07);
	horizontal_lines(width / 9.63, height / 5.36, width / 9.63);
	horizontal_lines(width / 12.59, height / 1.455, height / 3.82)

	vertical_lines(width / 1.27, height / 8.93, height / 7.66);
	vertical_lines(width / 4.81, height / 7.66, height / 8.90);
	vertical_lines(width / 1.175, height / 1.19, height / 17.6);
	vertical_lines(width / 6.94, height / 1.49, height / 7.15);
	pop();

    push();
	strokeWeight(6);
	vertical_lines(width / 1.09, height / 1.25, height / 13.4);
	pop();
 

/////DRAW THE COLOR BLOCKS/////
///Static blocks
    push(); // blue above long balck bar on lower half
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
    translate(width / 1.74, height / 1.6);
	rect(0, 0, width / 16.04, height/5.36);

	pop(); 

	push(); //long small black on top left
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(width / 3.63, height / 5.36);
	rect(0, 0, width / 13.76, height / 17.87);
	pop();

	push(); //red on top left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width/3.93, height/4.3);
	rect(0, 0, width / 10.7, height / 10.68);
	pop(); 

	push(); // blue next to red on top left
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.12, height / 5.23);
	rect(0, 0, width / 23.07, height / 5.63);
	pop(); 

	push(); // yellow on the left middle
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.32, height / 2.45);
	rect(0, 0, width / 8.09, height / 6.78);
	pop(); 

	push(); // yellow on top right
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.34, height / 3.72);
	rect(0, 0, width / 12.035, height / 13.4);
	pop(); 

	push(); // static blue on the very left small small!
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 5.2, height / 1.37);
	scale(1.1);
	rect(0, 0, width / 64.19, height / 11.91);
	pop(); 

	push(); // tall blue on bottom
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.57, height / 1.276);
	rect(0, 0, width / 48.14, height / 3.57);
	pop(); 

	push(); //static black 
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(width / 2.751, height / 3.57);
	rect(0, 0, width / 24.07, height / 7.66);
	pop();

	push(); //black on the right bottom
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(width / 1.57, height / 1.36);
	rect(0, 0, width / 6.02, height / 26.8);
	pop();

	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.44, height / 3.57);
	rect(0, 0, width / 11.33, height / 7.66);
	pop();

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.08, height / 3.1);
	rect(0, 0, width / 19.257, height / 10.72);
	pop();

	push(); //horizontal red on top middle
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.03, height / 4.03);
	rect(0, 0, width / 12.67, height / 14.89);
	pop();

	push(); //static black block in mid
	fill(0);
	noStroke();
	rectMode(CENTER); 
	translate(width / 2.14, height / 2.09);
	rect(0, 0, width / 5.2, height / 8.93);
	pop();

	push(); // small rect yellow in lower mid
	fill(mainYellow);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.89, height / 1.7);
	rect(0, 0, width / 38.514, height / 8.93);
	pop();

	push(); //black below long yellow on lower left
	fill(0);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.97, height / 1.44);
	rect(0, 0, width / 12.04, height / 53.6);
	pop();

	push(); //small red next to tall blue bar
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.395, height / 1.48);
	rect(0, 0, width / 26.75);
	pop();

	push(); //long yellow on lower left
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.84, height / 1.53);
	rect(0, 0, width / 4.28, height / 15.31);
	pop();

	push(); //small red on bottom left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.77, height / 1.66);
	rect(0, 0, width / 19.257, height / 17.8);
	pop();

	push(); //static yellow above very tall blue
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.41, height / 1.79);
	rect(0, 0, width / 13.37, height / 5.96);
	pop();

	push(); // white bottom right
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.32, height / 1.26); 
	rect(0, 0, width / 5.35, height / 10.72);
	pop(); 

	push(); // yellow lower right
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.57, height / 1.47); 
	rect(0, 0, width / 16.04, height / 13.4);
	pop(); 
	
	push();
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.3, height / 1.43); 
	rect(0, 0, width / 10.70);
	pop(); 

	push();
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.656, height / 2.12);
	scale(1.1);
	rect(0, 0, width / 12.838, height / 9.24);
	pop();

	push(); // blue below white ine th mid
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.066, height / 1.914); 
	scale(1.2);
	rect(0, 0, width / 19.257, height / 5.96);
	pop(); 

	push(); // white in the mid
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.96, height / 2.44); 
	rect(0, 0, width / 9.8, height / 11.45);
	pop(); 

	push(); // yellow big one in the middle
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.6, height / 2.88); 
	rect(0, 0, width / 8.02, height / 6.3);
	pop(); 

	push(); // tall red on the top
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
    translate (width / 1.44, height / 4.09);
	rect(0, 0, width / 48.14, height / 2.68);
	pop(); 

	push(); // white above small red
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
    translate(width / 2.801, height / 1.88);
	rect(0, 0, width / 24.07, height / 10.12);
	pop(); 

	push(); //very small red next to white under
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.31, height / 1.82);
	rect(0, 0, width / 27.51, height / 17.8);
	pop();

	push(); //vertical red between blue and white on mid right
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.52, height / 2.086);
	rect(0, 0, width / 43.77, height / 9.6);
	pop();

	push(); // yellow at bottom
	fill(mainYellow)
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.56, height / 1.23);
	rect(0, 0, width /17.5, height / 6.7);
	pop(); 
	
///////////////////////////////////////////////
///COLOR BLOCKS WITH MOVEMENTS

	push(); // red above long balck
	fill(mainRed);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.46, height / 1.46);
	scale(scaledSize3);
	rect(0, 0, width / 12.04, height / 8.93*1.1);
	pop();

	push(); // white at bottom left
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 4.28, height / 1.34); 
	scale(scaledSize2);
	rect(0, 0, width / 14.81, height / 8.246);
	pop(); 

	push(); //white under red on top left
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.84, height / 3.25); 
	scale(scaledSize2);
	rect(0, 0, width / 6.64*1.1, height / 17.8);
	pop(); 

	push(); // red big one in the middle slightly left
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.48, height / 2.45); 
	scale(scaledSize2);
	rect(0, 0, width / 8.09, height / 6.78);
	pop(); 
	
	push(); 
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.1, height / 1.62); 
	scale(scaledSize2);
	rect(0, 0, width / 12.19, height / 10.94);
	pop(); 

	push(); // red bottom middle
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.88, height / 1.45); 
	scale(scaledSize);
	rect(0, 0, width / 19.257, height / 8.25);
	pop(); 
	
	push(); // big red on bottom left corner
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.95, height / 1.85); 
	scale(scaledSize);
	rect(0, 0, width / 11.07, height / 6.87);
	pop(); 

	push(); //white below vertical red bar
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER);
	translate(width / 1.37, height / 2.11);
	rect(0, 0, width / 8.02, height / 10.72);
	pop();
	
	push(); //the 1st yellow on the top row
	fill(mainYellow);
	stroke(0);
   strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 2.61, height / 5.36);
	scale(scaledSize2);
	rect(0, 0, width / 12.04, height / 15.31);
	pop();

	push(); //long blue on very right
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.22, height / 3.15);
	scale(scaledSize3);
	rect(0, 0, width / 8.02, height / 21.44);
	pop();

	push(); //the squred blue next to the tall red bar
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.51, height / 3.83);
	scale(scaledSize3);
	rect(0, 0, width / 24.07, height / 13.4);
	pop();

	push(); //the 4th blue on the top row
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.82, height / 3.97);
	scale(scaledSize2);
	rect(0, 0, width / 24.07, height / 3.83);
	pop();

	push();
	fill(mainRed);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.73, height / 2.61); 
	scale(scaledSize2);
	rect(0, 0, width / 19.257);
	pop(); 

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.42, height / 1.76);
	scale(scaledSize);
	rect(0, 0, width / 12.04, height / 7.66);
	pop();

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 1.78, height / 1.85);
	scale(scaledSize3);
	rect(0, 0, width / 21.40);
	pop();
	
	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(4);
	rectMode(CENTER); 
	translate(width / 3.1, height / 1.79);
	scale(scaledSize2);
	rect(0, 0, width / 25.3, height / 5.96);
	pop();


////small squred decors
	push(); 
	fill(mainRed);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(width / 1.27, height / 2.33); 
	scale(scaledSize2);
	rect(0, 0, width / 32.095, height / 17.8);
	pop(); 

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(3);
	rectMode(CENTER); 
	translate(width / 1.41, height / 4.47); 
	scale(scaledSize);
	rect(0, 0, width / 64.19, height / 35.73);
	pop(); 

	push(); 
	fill(mainYellow);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(width / 1.17, height / 1.307); 
	scale(scaledSize2);
	rect(0, 0, width / 32.095, height / 17.8);
	pop(); 

	push(); 
	fill(mainBlue);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(width / 4.8, height / 3.70); 
	scale(scaledSize2);
	rect(0, 0, width / 48.14, height / 26.8);
	pop(); 

	push(); 
	fill(255);
	stroke(0);
	strokeWeight(3.5);
	rectMode(CENTER); 
	translate(width / 6.88, height / 1.6); 
	scale(scaledSize);//25
	rect(0, 0, width / 38.51, height / 21.44);
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
