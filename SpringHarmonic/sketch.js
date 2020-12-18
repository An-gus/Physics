let l,g,m,k,s,x,xd,xdd

function setup() {
  createCanvas(400, 400);
  
  l = 100
  g = 9.81
  m = 1
  k = 0.1
  s = (m*g)/k
  x = -50
  xd = 0
  maxx = x
  minx = x
}

function draw() {
  background(41);
  stroke(255)
  strokeWeight(3)
  translate(width/2, 30)
  line(-width/2,0,width/2,0)
  
  //calc
  xdd = (-k*x)/m
  xd += xdd
  x += xd
  
  xd *= 0.99
  
  minx = min(x,minx)
  maxx = max(x,maxx)
  
  //draw
  push()
  colorMode(HSB)
  clr = map(x,minx,maxx,120,0)
  stroke(clr,100,100)
  line(0,0,0,s+l+x)
  pop()
  ellipse(0,s+l+x,10,10)
}