function setup() {
  createCanvas(850,850);
  background(0);
}

function draw() {
  fill(255);
  for(a=40;a<820;a=a+35){
    for(b=40;b<820;b=b+35){
      ellipse(a,b,30,30);
    }
  }
}
