var xpos=500;
var ypos=200;
var xspeed=2.8;
var yspeed=2.2;
var xdirection=1;
var ydirection=1;

var apos=200;
var bpos=550;
var aspeed=2.8;
var bspeed=2.2;
var adirection=1;
var bdirection=1;


function setup() {
  createCanvas(600,600);
  background(0);

}

function draw() {
    background(0);
    xpos=xpos+xspeed*xdirection;
    ypos=ypos+yspeed*ydirection;
    
    if(xpos>580 || xpos<20){
      xdirection=-1*xdirection;
    }
    if(ypos>580 || ypos<20){
      ydirection=-1*ydirection;
    }
    
    apos=apos+aspeed*adirection;
    bpos=bpos+bspeed*bdirection;
    
    if(apos>580 || apos<20){
      adirection=-1*adirection;
    }
    if(bpos>580 || bpos<20){
      bdirection=-1*bdirection;
    }
    
    
    noStroke;
    fill(255,0,0);
    ellipse(xpos,ypos,40,40);
    fill(0,255,0);
    ellipse(apos,bpos,40,40);
}
