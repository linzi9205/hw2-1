function setup() {
  createCanvas(850,850);
  background(0);
}

function draw() {
  noFill();
  stroke(255);
  strokeWeight(4);
  for(b=40;b<810;b=b+20){
    for(a=40;a<810;a=a+20){
      line(a,b,b,a);
    }
  }
  point(40,40);
  point(800,800);
}
