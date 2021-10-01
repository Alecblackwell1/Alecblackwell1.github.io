//Move your mouse to the right slowly

var animation;
var angle = 0.5;
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
      
   if (second() % 1 == 1) {  
   jitter = random(-10, 1);
  }
  angle = angle + jitter;
  var c = cos(angle);
 translate(width/5, height/5);
  rotate(c);
  ellipse(150, 46, 55, 55);  
triangle(100, 70, 50, 30, 44, 80);
  }
}
animation=animation+0.5;
}