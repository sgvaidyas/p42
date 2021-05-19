function setup() {
  createCanvas(800,400);

}

function draw() {
  background(0);  
  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  hr = hour();
  mm = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mmAngle = map(mm,0,60,0,360);
  hhAngle = map(hr%12,0,12,0,360);

  push()
  rotate(hhAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  drawSprites();
  pop();

  push()
  rotate(mmAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,100,0)
  drawSprites();
  pop();  
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  drawSprites();
  pop();



  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //Minutes
  stroke(0,0,255);
  arc(0,0,280,280,0,mmAngle);
  //Hour
  stroke(0,255,0);
  arc(0,0,260,260,0,hhAngle);
}