function setup() {
  createCanvas(850,850);
  background(0);
}

function draw() {
  fill(255);
  for(n=40;n<810;n=n+32){
    ellipse(n,n,40,40);
  }
}
