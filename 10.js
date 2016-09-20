function setup() {
  createCanvas(850,850);
  background(0);
   for(a=0;a<850;a=a+20){
    stroke(255);
    strokeWeight(5);
    var l=random(850);
    line(a,850,a,l);
  }
}

function draw() {
}
