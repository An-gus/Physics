let L,m,M,t,bpos,r,g,rd,rdd,td,tdd

function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCamera()
  cam.setPosition(0,-150,450)
  cam.lookAt(0,0,0)
  
  //vars//
  L = 200 // total length of rope
  m = 1 // mass of spinnig ball
  M = 0.25 // mass of hanging ball
  g = 9.81 // acceleration due to gravity
  t = 0 // initial angle of ball
  td = 0.12 // angular velocity of ball
  r = 150 // distance of ball from centre
  rd = 0.2 // velocity of ball away from centre
  
  bpos =  p5.Vector.fromAngles(PI/2,t)
  bpos.mult(r)
  
  

}

function draw() {
  
  //calc//
  if (r>0 && L-r>10){
  
  rdd = (m*td*td*r - M*g)/(M+m)
  tdd = (-2*td)/r *0.1
  
  rd += rdd
  td += tdd
  
  r += rd
  t += td
  
  bpos =  p5.Vector.fromAngles(PI/2,t).mult(r)
  }
  
  
  //draw//
  orbitControl()
  background(41);
  push()
  fill(255)
  rectMode(CENTER)
  rotateX(PI/2)
  rect(0,0,400,400)
  pop()
  
  push()
  line(0,0,0,bpos.x,-5,bpos.z)
  translate(bpos.x, -10, bpos.z)
  noStroke()
  fill(255,0,0)
  sphere(10)
  pop()
  
  push()
  line(0,0,0,0,L-r,0)
  translate(0, L-r, 0)
  noStroke()
  fill(0,255,0)
  sphere(10)
  pop()
}