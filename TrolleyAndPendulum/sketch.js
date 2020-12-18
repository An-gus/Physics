let g,l,m,M,t,x,td,xd,tdd,xdd

function setup() {
  createCanvas(400, 400);
  
  //def vars
  g = 9.81
  l = 175
  m = 10
  M = 5
  t = PI/2
  x = 0
  td = 0.1
  xd = 3
  
}

function draw() {
  background(41);
  line(0,85,width,85)
  translate(width/2,80)
  rectMode(CENTER)
  
  
  //calc
  var div = (m+M - M*cos(t)*cos(t))
  xdd = (M*(td*td*l + g*cos(t))*sin(t)) / div
  tdd = (-sin(t)*(g*m + g*M + M*l*td*td*cos(t))) / (l*div)
  
  xd += xdd
  td += tdd
  
  x += xd
  xd *= 0.99
  t += td
  td *= 0.99
  
  //if (x>= width/2-7.5){x=width/2-7.5; xd *= -0.5}
  //if (x<= -width/2+7.5){x=-width/2+7.5; xd *= -0.5}
  
  if (x >= width/2 || x <= -width/2){x *= -1; xd *= 0.5}
  
  
  //draw
  line(x, 0, x+l*sin(t), l*cos(t))
  rect(x, 0, 15, 10)
  ellipse(x+l*sin(t), l*cos(t), 10, 10)
  
}