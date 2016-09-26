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
