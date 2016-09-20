function setup() {
  createCanvas(850,850);
  background(100);
}

function draw() {
  noFill();
  stroke(255);
  strokeWeight(4);
  for(b=40;b<810;b=b+20){
    for(a=40;a<810;a=a+20){
      rect(a,b,20,20);
    }
  }
}
