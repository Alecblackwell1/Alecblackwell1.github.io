//Move your mouse to the right slowly

var animation;
var angle = 0.0;
var jitter=0.0;
function setup(){
  createCanvas (800,600);
  noStroke();
  fill(255);
  
}

function draw(){
  var x;
  var y;
   background(430,220,100);
  for(x=0; x<mouseX; x=x+10){
    fill(random(255),random(255),random(255));
    ellipse(x,0,x,height);
    for(y=0; y<mouseX; y=y+10){
      rect(x,y,x,y);
      
   if (second() % .05 == 0) {  
   jitter = random(-0.1, 0.1);
  }
  angle = angle + jitter;
  var c = cos(angle);
//  translate(width/2, height/2);
  rotate(c);
  ellipse(100, 46, 55, 55);  
triangle(70, 100, 150, 500, 86, 75);
  }
}
//animation=animation+0.5;
}