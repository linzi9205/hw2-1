// FIRST EDITION:

function setup() {
  createCanvas(850,850);
  background(0);
  
  colorMode(HSB);
  for(a=40;a<820;a=a+35){
    for(b=40;b<820;b=b+35){
    noStroke();
    fill(360*(1.8*a/35+55*b/35)/1640,100,100);
    ellipse(a,b,30,30);
    }
  }
}
function draw() {
}



// SECOND EDITION:

function setup() {
  createCanvas(850,850);
  background(0);
  colorMode(HSB);
  var h=10;
  noStroke();
  
  for(var y=40;y<820;y=y+35){
    for(var x=40;x<820;x=x+35){
    fill(h,100,100);
    h=h+0.5;
    ellipse(x,y,30,30);
    }
  }
}
function draw() {
}
