/* 
   getNoiseValue arguments:
     x: current grid location across
     y: current grid location down
     loop: can be any value from 0-1 and will loop
     name: the "name" of the lookup table. probably change this each time.
     min/max: the minimum and maximum of the value to return
     smoothness: 1 means elements are not related. larger numbers cause groupings.
*/
function draw_one_frame(cur_frac) {
  //background(255);
  let backgroundColor = color("##fffff")
  fill(backgroundColor)
  rect(0,0, width, height)
  //////////////////////////////////////set up////////
  let spacingSize = width / 20;
  
  let noiseColor;
let noiseyColor; 
// let backupColor = color("#D34F73") // blush

let from = color("#e64937");
let to = color("#ffffff");
let interA = lerpColor(from, to, 0.8);

let backupColor = color("#f5c022") // yellow
let DetailColor = color("#e64937") //red
//let DetailColor = interA;
let mainColor = color("#68abed") //blue



  for(let i = 0; i < width / spacingSize; i++){
	for(let down = 0; down +1 < height / spacingSize; down++){
		fill(0);
		ellipse(spacingSize*i, spacingSize*down, 4); //
		//line(width/2, spacingSize*i, width/2, frameCount); 
		noiseColor = getNoiseValue(spacingSize*i,spacingSize*down, 1, "noiseColor",0,1, 180 )
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor)  // https://p5js.org/reference/#/p5/lerpColor
		fill(noiseyLerp)
		strokeWeight(1);
		rect(spacingSize*i, spacingSize*down, spacingSize, spacingSize);


		noiseColor2 = getNoiseValue(spacingSize*i, spacingSize*down, 1, "noiseColor2", 0, 1, 200);
		noiseLerp2 = lerpColor(from, to, noiseColor2);

	
		if(cur_frac > 0.3 && noiseColor < 0.3){
			fill(225)
			moveXMap = map(cur_frac,0.3, 1, spacingSize*(i+1), spacingSize*(i))
			fill(noiseLerp2);
			rect(moveXMap,spacingSize*down,spacingSize) 
			
		}
		
		

	}
	
  }
	

//   for(var i=0;i<15;i++){
// 	  for(var k=0;k<20;k++){
// 		stroke(255,255,255);
//     rotate(PI / 12.0);
// 	  fill(255,255-i*10,255-k*10);
//   	line(a%100,b%100,x%300,y%300);
// 	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
// 		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
// 		rect(x%width, y%height, k+10, k+10);
// 		fill(0,i*10,255-k*10);
// 		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
// 		rotate(PI / 24.0);
// 		fill(255-(i+k)*5,(i+k)*7,i*20);
// 		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
// 		rect(a%width, b%height, k+5, k+5);
// 		drawflower(k,x);
// 	  }
//   }

}

function drawtriangle(x,y,r){
	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
}

function drawflower(i,k){
		if(i%2==1){
			fill(255,(k*0.4)%255,30);
			stroke(k%255,255,0);
			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
		}
		else{
			fill(k%255,0,255);
			stroke(0,(k*0.4)%255,255);
			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		}
}
