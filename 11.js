var a=0;

function setup() {
  createCanvas(600,600);
  background(0);
  frameRate(10);

}

function draw() {
    strokeWeight(3);
    var l=random(600);
    stroke(0);
    line (a,600,a,0);
    stroke(255);
    line(a,600,a,l);
    a=a+20;
    if (a>600){
      a=0;
    }
}
