function setup() {
  createCanvas(850,850);
  background(255);
  
  colorMode(HSB);
  for(a=40;a<820;a=a+35){
    for(b=40;b<820;b=b+35){
    noStroke();
    var h=random(360);
    fill(h,100,100);
    ellipse(a,b,30,30);
    }
  }
}

function draw() {

}
