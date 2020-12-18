let l,g,m,k,e,ed,edd,t,td,tdd

let pnts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function setup() {
  createCanvas(400, 400);
  
  l = 150 // legnth of the spring with zero load
  g = 9.81 // gravitational acceleration
  m = 9 // mass of the load
  k = 1 // spring constant of spring
  e = 15 + (m*g)/k // initail extention of spring where mg/k is the equilibrium point
  ed = 0 // initial velocity of extention
  t = PI/6 // initial angle
  td = 0 // initial angular velocity

  
  
  maxe = e
  mine = e
}

function draw() {
  background(41);
  stroke(255)
  strokeWeight(3)
  translate(width/2, 30)
  line(-width/2,0,width/2,0)
  
  //calc
  if (frameCount % 2 ==0){
  edd = td*td*(l+e) + g*cos(t) - ((k*e)/m)
  tdd = -(2*td*ed +g*sin(t)) / (l+e)
    
  ed += edd
  td += tdd
  
  e += ed
  t += td
  
  ed *= 0.99
  td *= 0.99
  
  mine = min(e,mine)
  maxe = max(e,maxe)
  
  }
  
  append(pnts,createVector((l+e)*sin(t), (l+e)*cos(t)))
  pnts.shift()
  
  //draw
  for (var p of pnts){
    point(p.x, p.y)
  }
  push()
  colorMode(HSB)
  clr = map(e,mine,maxe,120,0)
  stroke(clr,100,100)
  line(0,0, (l+e)*sin(t), (l+e)*cos(t))
  pop()
  ellipse((l+e)*sin(t), (l+e)*cos(t), 10, 10)
}
