function setup() {
  createCanvas(850,850);
  background(0);
}

function draw() {
  noStroke();
  for(b=40;b<500;b=b+30){
    for(a=b;a<870-b;a=a+30){
      ellipse(a,b,25,25);
    }
  }
}
